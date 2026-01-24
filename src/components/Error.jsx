import React from "react";
import { useNavigate } from "react-router-dom";
import { NETFLIX_URL } from "../utils/constants";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-4">
      {/* Netflix Logo */}
      <div className="mb-8">
        <img
          src={NETFLIX_URL}
          alt="Netflix Logo"
          className="w-40 sm:w-48 md:w-56"
        />
      </div>

      {/* Error Message */}
      <div className="text-center max-w-md">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          The page you are looking for doesn't exist or an error occurred. Don't worry, you can return to the home page.
        </p>
      </div>

      {/* Go Home Button */}
      <button
        onClick={handleGoHome}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition-colors text-base sm:text-lg"
      >
        Go to Home
      </button>

      {/* Footer */}
      <div className="mt-12 text-gray-400 text-sm">
        <p>© 2026 Netflix AI. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
