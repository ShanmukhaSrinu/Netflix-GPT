import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {
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


  return (
    <div className="
      absolute top-0 w-full z-50 
      bg-gradient-to-b from-black via-black/50 to-transparent
      transition-all duration-300
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Netflix Logo */}
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
          className="w-32 sm:w-44 cursor-pointer"
        />

        {/* Right side - User & Sign Out */}

       {user &&<div className="flex items-center gap-4">
        
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