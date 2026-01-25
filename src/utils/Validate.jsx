import React from 'react'

const checkvalidData = (email,password) => {
 
    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
   const isPasswordValid = password && password.length > 0

    if(!isEmailValid){
        return "Email is not valid"
    }
    if(!isPasswordValid){
        return "Password is not valid"
    }

    return null;
}

export default checkvalidData