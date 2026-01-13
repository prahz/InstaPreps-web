// src/components/Verification.js
import React, { useState } from "react";
import axios from "axios";

const Verification = ({ otpToken, mobiles, countryCode, onVerified }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("/api/proxy/verify-otp", {
        mobile_no: mobiles,
        otp: otp,
        countrycode: countryCode,
        token: otpToken,
      });

      console.log("✅ Verify OTP Response:", res.data);

      if (res?.data?.success) {
        onVerified(); // go to StudentDetails page
      } else {
        setError(res?.data?.message || "OTP verification failed.");
      }
    } catch (err) {
      console.error("Verify OTP Error:", err);
      setError("OTP verification failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 border-2 border-black p-6 bg-white rounded-md">
      <h1 className="text-2xl font-light mb-4">Verify OTP</h1>
      <form onSubmit={handleVerify} className="flex flex-col gap-4">
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="border border-[#7666CA] rounded-md p-3 text-gray-700"
          required
        />
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-600 hover:opacity-95 transition"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
};

export default Verification;
