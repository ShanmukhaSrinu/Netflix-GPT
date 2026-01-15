import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userslice";
import { NETFLIX_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
 

  const user=useSelector(store=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // An error happened.
  navigate("/error")
  
});
  }


   useEffect(() => {
  const unsubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or signed up
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL}));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")  
      }
    });

    // unsubscribe when component unmounts
    return ()=>unsubscribe()
  }, []);


  return (
    <div className="
      absolute top-0 w-full z-50 
      bg-linear-to-b from-black via-black/50 to-transparent
      transition-all duration-300
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items justify-between">
        {/* Netflix Logo */}
        <img
          src={NETFLIX_URL}
          alt="Netflix"
          className="w-32 sm:w-44 cursor-pointer"
        />

        {/* Right side - User & Sign Out */}

       {user &&<div className="flex items-center gap-4">

        <div className="w-10">
          <img src={user.photoURL} alt="profile logo" />
        </div>
        
          {/* Sign Out Button */}
          <button onClick={handleSignOut}
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
        </div>}
      </div>
    </div>
  )
}

export default Header