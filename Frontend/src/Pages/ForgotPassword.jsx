import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    // later: add backend API call here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Forgot Password?
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 mb-6 text-sm">
          Enter your registered email address below. We’ll send you a link to
          reset your password.
        </p>

        {/* Email Field */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Send Reset Link
        </button>

        {/* Back to Login */}
        <p className="text-center text-sm text-gray-600 mt-5">
          Remembered your password?{" "}
          <a
            href="/login"
            className="text-blue-500 hover:underline font-medium"
          >
            Back to Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;

