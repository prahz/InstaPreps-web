import React from 'react';
import PropTypes from 'prop-types';

// Fetch dynamic paths for static generation
export const getStaticPaths = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/postfeed`);
    if (!res.ok) {
      console.error('Failed to fetch post feed:', res.statusText);
      return { paths: [], fallback: true }; // Allow fallback rendering
    }

    const result = await res.json();
    const paths = result.data.map((item) => ({
      params: { postno: item.id.toString() },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error('Error fetching static paths:', error);
    return { paths: [], fallback: true };
  }
};

// Fetch data for a specific post based on its ID
export const getStaticProps = async (context) => {
  const { postno } = context.params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/post/${postno}`);
    if (!res.ok) {
      console.error('Failed to fetch post data:', res.statusText);
      return { notFound: true };
    }

    const result = await res.json();
    return { props: { result } };
  } catch (error) {
    console.error('Error fetching post data:', error);
    return { notFound: true };
  }
};

// Component to display the post data
const MyData = ({ result }) => {
  if (!result) {
    // Fallback UI for pages still generating
    return <p>Loading...</p>;
  }

  return (
    <div className='px-2'>
      <div className='border-solid border border-gray-300 rounded-md shadow-lg max-w-2xl overflow-hidden relative flex mt-4 cursor-pointer'>
        <div className='absolute top-3 right-0 px-4 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0zm7 0a1 1 0 11-2 0 1 1 0zm7 0a1 1 0 11-2 0 1 1 0z'
            />
          </svg>
        </div>
        <div className='p-2'>
          <div className='flex space-x-2'>
            <div className='flex-shrink-0'>
              <img className='rounded-full' src='/images/logoprep.webp' alt='Logo' />
              {/* <img
  className='rounded-full w-10 h-10 object-cover'
  src={
    result?.profile_picture
      ? result.profile_picture
      : '/images/default-avatar.png'
  }
  alt='User Profile Picture'
/>
 */}

            </div>

            
            <div className='mt-2'>
              <h2 className='text-lg'>{result?.first_name || 'Unknown User'}</h2>
            </div>
          </div>
          {/* <div> box</div> */}
          {/* <div className='my-4'>{result?.postbody || 'No content available'}</div> */}
          <div className='my-4 text-gray-800 whitespace-pre-line leading-relaxed'>
  {result?.postbody || 'No content available'}
</div>

          <div className='relative w-full h-8 overflow-hidden'>
            <div className='absolute left-0 top-0 space-x-1 flex'>
              <a href='#' className=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 cursor-pointer'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </a>
              <p>{result?.likecount || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for validation
MyData.propTypes = {
  result: PropTypes.shape({
    first_name: PropTypes.string,
    postbody: PropTypes.string,
    likecount: PropTypes.number,
  }),
};

export default MyData;
