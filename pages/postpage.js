import React, { useState } from 'react';
import axios from 'axios';

const PostModal = ({ onClose, onPostSuccess }) => {
  const [text, setText] = useState('');
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  // Handle media upload
  const handleMediaChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setMedia(file);
    setMediaPreview(URL.createObjectURL(file));
  };

  // Handle submit
  const handleSubmit = async () => {
    try {
      if (!text.trim()) {
        alert('Please write something');
        return;
      }

      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        alert("You're not logged in properly. Please login again.");
        return;
      }

      let user;
      try {
        user = JSON.parse(storedUser);
      } catch (err) {
        console.error("Invalid user data:", err);
        alert("Session error. Please login again.");
        return;
      }

      const studentId = user?.id;
      if (!studentId) {
        alert("You're not logged in properly. Please login again.");
        return;
      }

      const formData = new FormData();
      formData.append('student_detail_id', studentId);
      formData.append('publish', 'true');
      formData.append('postbody', text);

      if (media) formData.append('media', media);

      const apiURL = process.env.NEXT_PUBLIC_BASE_API_URL;
      if (!apiURL) {
        console.error("API URL missing");
        alert("Internal error: API URL missing");
        return;
      }

      const response = await axios.post(
        `${apiURL}/api/post`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      // handle success for 200 or 201
      if ([200, 201].includes(response.status)) {
        if (onPostSuccess) onPostSuccess(response.data);
        alert("Post created successfully!");
        onClose();
      } else {
        console.warn("Unexpected status:", response.status);
        alert("Something went wrong while posting.");
      }

    } catch (error) {
      console.error("Post failed:", error.response?.data || error.message);
      alert("Failed to create post");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[60%] h-[550px] shadow-2xl border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-center">Create a Post</h2>

        <textarea
          className="w-full border border-gray-300 rounded-md p-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What do you want to talk about?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Media Preview */}
        {mediaPreview && (
          <div className="mt-4">
            {media?.type?.startsWith('image') ? (
              <img
                src={mediaPreview}
                alt="preview"
                className="max-h-48 rounded"
              />
            ) : (
              <video
                src={mediaPreview}
                controls
                className="max-h-48 rounded"
              />
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between items-center mt-8">
          {/* Media buttons */}
          <div className="flex gap-4 items-center text-sm">
            <label className="flex items-center gap-1 cursor-pointer text-blue-600">
              📷 <span>Photo</span>
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleMediaChange}
              />
            </label>

            <label className="flex items-center gap-1 cursor-pointer text-purple-600">
              🎥 <span>Video</span>
              <input
                type="file"
                accept="video/*"
                hidden
                onChange={handleMediaChange}
              />
            </label>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-10">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-sm rounded hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
