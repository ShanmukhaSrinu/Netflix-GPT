import React, { useRef, useState } from "react";
import Header from "./Header";
import checkvalidData from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userslice";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const [errormessage, seterrormessage] = useState(null);
  const navigate = useNavigate();
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
              const {uid,email,displayName}=user
              dispatch(addUser({uid: uid, email: email,displayName:displayName}))
              navigate("/browse");
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
          console.log(user);
          navigate("/browse");
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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_small.jpg 959w"
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
