import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Link from 'next/link';
import PostModal from 'pages/postpage';
import ReactMarkdown from 'react-markdown';

const Views = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postFeed, setPostFeed] = useState([]);
  const [tests, setTests] = useState([]);
  const [user, setUser] = useState(null);
  const [commentDrafts, setCommentDrafts] = useState({});
  const [localLikes, setLocalLikes] = useState({});

  // Load user once
  useEffect(() => {
    try {
      const stored = localStorage.getItem('user');
      if (stored) setUser(JSON.parse(stored));
    } catch (e) {
      console.error('User parse error', e);
    }
  }, []);

  // FETCH POSTS (Next.js API → instapreps backend)
  const getFeedPost = useCallback(async () => {
    try {
      const res = await axios.get('/api/postfeed');
      const posts = res.data?.data || [];

      setPostFeed(posts);

      const likes = {};
      posts.forEach((p) => {
        likes[p.id] = {
          liked: false,
          count: p.likecount || 0,
        };
      });
      setLocalLikes(likes);
    } catch (e) {
      console.error('postfeed error', e);
    }
  }, []);

  // FETCH RECOMMENDED TESTS (IMPORTANT FIX)
  const getRecommendedTest = useCallback(async () => {
    try {
      const res = await axios.get('/api/testlist/recommended/3017');
      setTests(res.data?.data || []);
    } catch (e) {
      console.error('recommended test error', e);
    }
  }, []);

  // Initial load
  useEffect(() => {
    getFeedPost();
    getRecommendedTest();
  }, [getFeedPost, getRecommendedTest]);

  // ADD COMMENT
  const submitComment = async (postId) => {
    if (!user?.id) {
      alert('Please login again');
      return;
    }

    const text = (commentDrafts[postId] || '').trim();
    if (!text) return;

    try {
      await axios.post('/api/postcomment', {
        post_id: postId,
        student_detail_id: user.id,
        publish: true,
        comment_body: text,
      });

      setCommentDrafts((p) => ({ ...p, [postId]: '' }));
      getFeedPost();
    } catch (e) {
      console.error('comment error', e);
    }
  };

  // LOCAL LIKE (UI ONLY)
  const toggleLike = (postId) => {
    setLocalLikes((p) => {
      const cur = p[postId];
      return {
        ...p,
        [postId]: {
          liked: !cur.liked,
          count: cur.liked ? cur.count - 1 : cur.count + 1,
        },
      };
    });
  };

  return (
    <div className="bg-[#f4f6f8] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 py-6 flex gap-6">

      {/* ================= FEED ================= */}
      <div className="flex-1">

        {/* Add Post */}
        <div
          className="bg-white border p-4 rounded mb-4 cursor-pointer" 
          onClick={() => setIsModalOpen(true)}
        >
          Add Post...
        </div>

        {isModalOpen && (
          <PostModal onClose={() => setIsModalOpen(false)} />
        )}

        {/* Posts */}
        {postFeed.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded shadow p-4 mb-4"
          >
            <h2 className="font-semibold text-lg">
              {p.first_name}
            </h2>

            <div className="bg-gray-100 p-3 rounded my-3">
              <ReactMarkdown>{p.postbody}</ReactMarkdown>
            </div>

            <button
              onClick={() => toggleLike(p.id)}
              className="text-sm mb-2"
            >
              ❤️ {localLikes[p.id]?.count ?? p.likecount}
            </button>

            <div className="flex gap-2 mt-2">
              <input
                className="flex-1 border px-2 py-1"
                placeholder="Post a comment"
                value={commentDrafts[p.id] || ""}
                onChange={(e) =>
                  setCommentDrafts((d) => ({
                    ...d,
                    [p.id]: e.target.value,
                  }))
                }
              />

              <button
                onClick={() => submitComment(p.id)}
                className="bg-blue-500 text-white px-4"
              >
                Comment
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= RIGHT PANEL ================= */}
      <div className="hidden lg:block w-[300px]">
        <div className="sticky top-24 space-y-4">

          {tests.map((t) => (
            <div
              key={t.id}
              className="bg-[#8ec7f7] rounded-lg shadow-md p-4"
            >
              <h3 className="font-semibold text-lg text-gray-800">
                {t.test_name}
              </h3>

              <p className="text-sm text-gray-700 mt-1">
                Duration: {t.duration} minutes
              </p>

              <p className="text-sm text-gray-700 mt-2">
                Practice makes one perfect
              </p>

              <Link
                href={{
                  pathname: "/instapreps_mocktest/test",
                  query: { id: t.id },
                }}
              >
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium">
                  Take Test
                </button>
              </Link>
            </div>
          ))}

        </div>
      </div>

    </div>
  </div>
  );
};

export default Views;
