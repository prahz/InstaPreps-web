import React from 'react';
import { Container } from 'postcss';
import Footer from 'src/components/footer';
 import Header from 'src/components/header';
import VerticalSidebar from 'src/components/VerticalSidebar';

function DeleteAccount() {
  return (
    <>
    {/* <Header/> */}
    <VerticalSidebar/>
     {/* <div className='logocontainer'>
          <a>
            <img src='/images/instaprepslogo20.png' />
          </a>
          <h1>
            <span>Instapreps AI</span>
          </h1>
        </div> */}

        <div style={{marginLeft:'50px', marginTop:'60px'}}>
        <h2>Follow these steps to remove your account:</h2>
        <p><b>Step 1:</b> Click on your profile.</p>
        <p><b>Step 2:</b> Select <strong>Remove Account</strong>.</p>
      </div>
      <div>
        <img 
          src="images/deleteaccountimage.jpg" 
          alt="" 
          style={{ width: '300px', height: '500px' ,marginTop:'50px',marginLeft:'50px' , marginBottom: '20px' }} 
        />
      </div>
     
    
      <div className='mt-0'>
        <Footer />
      </div>
    </>
  );
}

export default DeleteAccount;
