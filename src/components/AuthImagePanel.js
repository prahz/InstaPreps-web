import React from 'react';

const AuthImagePanel = () => {
  return (
    
    // <div className="hidden lg:flex flex-col w-1/2 bg-slate-900 text-white p-8 relative items-center justify-center">
    //   
    <div className="hidden lg:flex flex-col w-1/2 text-white relative items-center justify-center overflow-hidden">
    <div 
  className="absolute inset-0 bg-cover bg-center" 
  style={{ backgroundImage: "url('/images/loginsignupimg.jpg')" }}
></div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
    {/* Logo at the top-left corner */}
      <a href="/" className="absolute top-4 left-4 z-10">
        <img className="w-16 h-16" src="/images/logo.webp" alt="logo" />
      </a>

      
      
    </div>
  );
};

export default AuthImagePanel;