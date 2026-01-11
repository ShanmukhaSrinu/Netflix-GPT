import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

const [isSignInForm,setisSignInForm]=useState(true)
    const toggeleSignInForm=()=>{
        setisSignInForm(!isSignInForm)
    }
    
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_small.jpg 959w"
          alt=""
          aria-hidden="true"
          class="default-ltr-iqcdef-cache-19j6xtr"
        ></img>
      </div>
      <form className="bg-opacity-50 relative text-white  w-3/12 top-36 mx-auto p-12 bg-black/80  right-0 left-0 ">
        <h1 className="font-bold text-white text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
           type="text"
           placeholder="Full Name"
           className="p-4 my-4  w-full bg-gray-700"
         />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4  w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer " onClick={toggeleSignInForm}>
         {isSignInForm? "New to Netflix? Sign up now " : "Already registered? Sign In now"}   
            </p>
      </form>
    </div>
  );
};

export default Login;
