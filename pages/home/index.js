import React from 'react';
import Views from 'src/components/views';
import VerticalSidebar from 'src/components/VerticalSidebar';
import Head from 'next/head';

const Post = () => {
  return (
    <>
      <Head>
        <title>Posts - Instapreps - world's best confidence building & diagonosis app</title>
        <meta
          name='description'
          content="Read our Latest Student posts, watch short videos, on Instapreps - The World's first and the best Confidence Building app"
        />
      </Head>

      <div className='hidden md:block'>
        <VerticalSidebar />
      </div>

      <div className='transition-all duration-300' style={{ marginLeft: 'var(--sidebar-width, 0px)' }}>
        <h1 className='mt-4 text-2xl font-semibold px-8'>Latest Post</h1>
        <Views />
      </div>
    </>
  );
};

export default Post;
