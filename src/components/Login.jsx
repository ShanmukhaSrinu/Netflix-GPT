import React, { useRef, useState } from "react";
import Header from "./Header";
import checkvalidData from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userslice";
import { NETFLIX_BACKGROUND_SRC, NETFLIX_BACKGROUND_SRCSET } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const [errormessage, seterrormessage] = useState(null);
  
  const dispatch=useDispatch()

  // useRef hook is reference to our inputdata
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // toggel
  const toggeleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  // signin/signup button handling---------------------------------
  const handleButtonClick = () => {
    // validate the form data
    const message = checkvalidData(email.current.value, password.current.value);
    seterrormessage(message);

    if (message) return;

    //Sign In Sign Up logic
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0RN1rfgQ3wvx01TOc_5dyRGoW8SRGWTtmg&s",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName,photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL}));
              
            })
            .catch((error) => {
              // An error occurred
              seterrormessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code; 
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
           seterrormessage("This Email is already exist");
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage("Please check your email and password");
          // seterrormessage("Please Sign Up First");
        });
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute w-full h-full">
        <img
          src={NETFLIX_BACKGROUND_SRC}
          srcSet={NETFLIX_BACKGROUND_SRCSET}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>
      {/* ------- Form ------- */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-opacity-50 relative text-white w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-3/12 mx-auto p-6 sm:p-8 md:p-12 top-16 sm:top-24 md:top-36 bg-black/80 right-0 left-0 rounded-lg"
      >
        <h1 className="font-bold text-white text-xl sm:text-2xl md:text-3xl py-2 sm:py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-700 rounded-sm text-sm sm:text-base"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-700 rounded-sm text-sm sm:text-base"
        />

        <input
          ref={password}
          type="password"
          placeholder="Eg: Shannu123@"
          className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-700 rounded-sm text-sm sm:text-base"
        />
        <p className="text-red-500 font-bold text-xs sm:text-sm md:text-lg py-1 sm:py-2">
          {errormessage}
        </p>

        {/* signin signup button */}
        <button
          className="p-3 sm:p-4 my-4 sm:my-6 bg-red-700 w-full rounded-lg text-sm sm:text-base"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* toggel feature */}
        <p
          className="py-2 sm:py-4 cursor-pointer text-red-500  text-xs sm:text-sm md:text-base"
          onClick={toggeleSignInForm}
        >
           {isSignInForm
    ? <><span className="text-red-500">New to Netflix?</span> <span className="text-white hover:underline">Sign up now</span></>
    : <><span className="text-red-500">Already registered?</span> <span className="text-white hover:underline">Sign In now</span></>}
        </p>
      </form>
    </div>
  );
};

export default Login;
