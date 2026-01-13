
import React, { useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import axios from 'axios';
import WelcomeScreen from './WelcomeScreen';
import CountryPicker from "../src/components/CountryPicker";
import { useRouter } from 'next/router';
import VerticalSidebar from 'src/components/VerticalSidebar';

export default function Login() {
  const Steps = { Login: 'login', Otp: 'otp' };

  const [activeStep, setActiveStep] = useState(Steps.Login);
  const [showWelcome, setShowWelcome] = useState(true);

  const [countryCode, setCountryCode] = useState('+91');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const digitOnly = /^\d+$/;
    if (!digitOnly.test(mobile.trim())) {
      setError("Mobile number must contain only digits");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/studentlogin`,
        {
          mobile_no: mobile,
          password: password,
          countrycode: countryCode,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("📩 Final Login Response:", res.data);

      if (res?.data?.success) {
        const { password, ...safeUser } = res.data.data;

        // ---------------------------------------------------------
        // 👇 UPDATED SECTION FOR CHATBOT
        // ---------------------------------------------------------
        // We ensure the data has 'username' and 'contact' keys
        const chatbotUser = {
            ...safeUser, 
            username: safeUser.first_name || safeUser.name || "Student", 
            contact: safeUser.mobile_no || mobile, 
            email: safeUser.email_address || ""
        };

        if (typeof window !== 'undefined') {
          localStorage.setItem("user", JSON.stringify(chatbotUser));
        }
        // ---------------------------------------------------------

        router.push("/useraccount");
        return;
      }

      setError(res?.data?.message || 'Invalid credentials.');
    } catch (err) {
      console.error(err);
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (showWelcome) {
    return (
      <WelcomeScreen
        onLogin={() => setShowWelcome(false)}
        onSignup={() => (window.location.href = '/Signup')}
        onContinue={() => setShowWelcome(false)}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT: image */}
      <div className="relative w-full lg:w-1/2 h-screen">
        <img
          src="/images/gemini_photo.png"
          alt="Gemini"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-4xl font-bold mb-2">Confidence App</h1>
          <p className="text-2xl opacity-90">InstaprepsAI</p>
        </div>
      </div>

      {/* RIGHT: form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        {loading && (
          <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <BallTriangle color="#E93F36" height={160} width={160} />
          </div>
        )}

        <div className="w-full max-w-[530px]">
          {activeStep === Steps.Login && (
            <>
              <h1 className="text-4xl font-extralight">Login</h1>
              <h2 className="text-xl mt-4">Welcome back! Please log in</h2>

              <div className="mt-6 border-2 border-black p-6 bg-white rounded-md">
                <form onSubmit={handleLogin} className="flex flex-col gap-6">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <div className="flex items-center gap-3">
                    <CountryPicker value={countryCode} onChange={setCountryCode} />
                    <input
                      type="tel"
                      required
                      value={mobile}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="9999999999"
                      className="flex-1 border border-[#7666CA] rounded-md h-12 px-4 text-gray-700 bg-[#fafafa]"
                    />
                  </div>

                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full border border-[#7666CA] rounded-md h-12 px-4 pr-10 text-gray-700"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? '🙈' : '👁'}
                    </button>
                  </div>

                  {error && <p className="text-red-600">{error}</p>}

                  <button
                    type="submit"
                    className="w-full h-12 rounded-md text-white font-semibold bg-gradient-to-r from-blue-400 to-blue-500 hover:opacity-95 transition"
                  >
                    Login
                  </button>

                  <div className="text-center mt-2">
                    <a href="/Signup" className="text-sm text-blue-500 underline">Don't have an account? Sign Up</a>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}