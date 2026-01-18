import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userslice";
import { NETFLIX_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage, toggleGptSearchview } from "../utils/gptSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

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
          }),
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

 const handleLanguageChange=(e)=>{
  // console.log(e.target.value);
  dispatch(changeLanguage(e.target.value))
  

 }

  const handleGptSearchClick = () => {
    // Toggele GPT Search
    dispatch(toggleGptSearchview());
  };

  return (
    <div
      className="
      absolute top-0 w-full z-50 
      bg-linear-to-b from-black via-black/50 to-transparent
      transition-all duration-300  
    "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items justify-between">
        {/* Netflix Logo */}
        <img
          src={NETFLIX_URL}
          alt="Netflix"
          className="w-32 sm:w-44 cursor-pointer"
        />

        {/* Right side -GPT search & User & Sign Out */}

        {user && (
          <div className="flex items-center gap-4">

            {/* multi language support */}
          {showGptSearch && <select className="text-white bg-gray-900 border-2 border-gray-700 mr-3 md:mr-6 py-1 md:py-2 px-2 md:px-4 cursor-pointer rounded-lg focus:outline-none" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>}

            {/* GPT search */}
            {showGptSearch ?
             <button
              className="md:font-bold text-white mr-2 md:mr-5 py-1 md:py-2 px-4 md:px-4 cursor-pointer gradient-border bg-red-500 active:bg-red-700 rounded"
              onClick={handleGptSearchClick}
            >
              Home
            </button>:
            <button
              className="md:font-bold text-white mr-2 md:mr-5 py-1 md:py-2 px-2 md:px-2 cursor-pointer gradient-border bg-purple-500 active:bg-purple-700"
              onClick={handleGptSearchClick}
            >
              ✦ GPT Search
            </button>}

            {/* // user logo */}
            <div className="w-10">
              <img src={user.photoURL} alt="profile logo" />
            </div>

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="
              px-2 sm:px-4 py-1.5 sm:py-2 
              bg-red-600 hover:bg-red-700 
              text-white font-medium 
              rounded-md text-sm sm:text-base
              transition-colors duration-200
            "
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
