import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userslice";
import { NETFLIX_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage, toggleGptSearchview } from "../utils/gptSlice";
import InstructionsModal from "./InstructionsModal";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or signed up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchview());
  };

  return (
    <div className=" absolute top-0 w-full z-50 bg-gradient-to-b from-black via-black/50 to-transparent transition-all duration-300  ">
      <div className=" max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between ">
        {/* Netflix Logo */}
        <img
          src={NETFLIX_URL}
          alt="Netflix"
          className="w-24 sm:w-32 md:w-44 cursor-pointer"
        />

        {/* Right side - GPT search & User & Sign Out */}
        {user && (
          <div className="flex items-center gap-2 sm:gap-4">
            <InstructionsModal/>
           <Link to={"/about"}>
    
           <button
               className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-200">
                About
              </button>
           </Link>
           
            {showGptSearch && (
              <select
              className="text-xs sm:text-sm text-white bg-gray-900 border-2 border-gray-700 py-1 px-2 sm:py-2 sm:px-4 mr-2 sm:mr-3 md:mr-6 cursor-pointer rounded-lg focus:outline-none"
              onChange={handleLanguageChange}
              >
                {/* Multi-language support */}
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option key={language.identifier} value={language.identifier}>
                    {language.name}
                  </option>
                ))}
              </select>
            )}

            {/* GPT search */}
            {showGptSearch ? (
              <button
                className="text-xs sm:text-sm md:font-bold text-white py-1 px-2 sm:py-2 sm:px-4 mr-1 sm:mr-2 md:mr-5 cursor-pointer gradient-border bg-red-500 active:bg-red-700 rounded"
                onClick={handleGptSearchClick}
              >
                Home
              </button>
            ) : (
              <button
                className="text-xs sm:text-sm md:font-bold text-white py-1 px-2 sm:py-2 sm:px-4 mr-1 sm:mr-2 md:mr-1 cursor-pointer gradient-border bg-purple-500 active:bg-purple-700 rounded"
                onClick={handleGptSearchClick}
              >
                ✦ GPT Search
              </button>
            )}

            {/* User logo */}
            {/* <div className="w-8 sm:w-10">
              <img
                src={user.photoURL}
                alt="profile logo"
                className="w-full h-full rounded"
              />
            </div> */}

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-200"
            >
              Sign Out
            </button>
            

            
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
