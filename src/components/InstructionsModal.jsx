import React, { useState } from "react";

const InstructionsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button in Header */}
      <button
        onClick={toggleModal}
        className="text-white bg-transparent border border-white px-2 sm:px-2 py-1 sm:py-1 text-xs sm:text-sm rounded hover:bg-white/10 transition-colors"
      >
        Movies Not Visible?
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-black/90 rounded-lg p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Troubleshooting Guide
              </h2>
              <button
                onClick={toggleModal}
                className="text-white hover:text-gray-300 text-2xl"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4 text-white">
              <h3 className="text-lg sm:text-xl font-semibold">
                If movies are not loading:
              </h3>

              <div className="space-y-3">
                <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-medium mb-1">
                    1. Network Issues with Jio:
                  </h4>
                  <p className="text-sm sm:text-base">
                    TMDB API often doesn't work well with Jio network. Try
                    switching to Airtel WiFi or mobile data.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-medium mb-1">2. Change DNS Settings:</h4>
                  <p className="text-sm sm:text-base">
                    Go to your device settings and change DNS to Cloudflare
                    (1.1.1.1) or Google (8.8.8.8).
                  </p>
                  <div className="bg-gray-900/70 p-3 rounded text-white text-sm">
                    <p>
                      1. Chrome Settings → Privacy & Security → Security →
                      Enable "Use secure DNS"
                    </p>
                    <p>
                      2. Select "Custom" → Choose Cloudflare (1.1.1.1) or Google
                      DNS
                    </p>
                    <p className="text-xs text-gray-300">
                      Helps access TMDB if blocked by your ISP (like Jio)
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-medium mb-1">3. Use Incognito Mode:</h4>
                  <p className="text-sm sm:text-base">
                    Try opening the site in incognito/private browsing mode to
                    avoid cache issues.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-medium mb-1">4. VPN Solution:</h4>
                  <p className="text-sm sm:text-base">
                    Use a VPN service to connect to a different region where
                    TMDB is accessible.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-medium mb-1">5. Clear Cache:</h4>
                  <p className="text-sm sm:text-base">
                    Clear your browser cache and cookies, then restart your
                    browser.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-medium mb-1">6. TMDB API Status:</h4>
                  <p className="text-sm sm:text-base">
                    Check if TMDB API is operational at{" "}
                    <a
                      href="https://status.themoviedb.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      status.themoviedb.org
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  About TMDB API:
                </h3>
                <p className="text-sm sm:text-base">
                  TMDB (The Movie Database) API provides access to movie, TV
                  show, and cast information. Some ISPs in India may block or
                  throttle access to TMDB API endpoints.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={toggleModal}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InstructionsModal;
