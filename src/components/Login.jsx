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
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
              
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
          //  seterrormessage("This Email is already exist");
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
          seterrormessage(errorCode + "-" + errorMessage);
          // seterrormessage("Please Sign Up First");
        });
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src={NETFLIX_BACKGROUND_SRC}
          srcSet={NETFLIX_BACKGROUND_SRCSET}
          alt=""
          aria-hidden="true"
          className="default-ltr-iqcdef-cache-19j6xtr"
        ></img>
      </div>
      {/* ------- Form       */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-opacity-50 relative text-white  w-3/12 top-36 mx-auto p-12 bg-black/80  right-0 left-0 "
      >
        <h1 className="font-bold text-white text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4  w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4  w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errormessage}</p>

        {/* signin signup button */}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* toggel feature */}
        <p className="py-4 cursor-pointer " onClick={toggeleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now "
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
