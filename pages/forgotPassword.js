import React from 'react'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import forgotPassHandler from '../handlers/forgotPassHandler.js'

const forgotPassword = () => {

    const [email, setEmail] = useState("");

    const submitHandler = () =>{
        forgotPassHandler({"email":email})
    }
  return (
    <div>
         <ToastContainer />
        <div className="flex justify-center relative p-20 bg-violet-900">
  <div className="min-h-screen  sm:flex sm:flex-row  justify-center bg-slate-900 p-20 rounded-3xl shadow-xl">
      <div className="flex-col flex  self-center lg:p-10 sm:max-w-5xl xl:max-w-lg  z-10">
        <div className="self-start hidden lg:flex flex-col  text-white">
         <div className="flex items-center mb-5"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Eo_circle_purple_letter-a.svg/2048px-Eo_circle_purple_letter-a.svg.png" className="w-10"/>
    <h3 className="text-3xl font-bold ml-2">Website</h3>
</div>
          <h1 className="my-3 font-semibold text-5xl">Welcome Back to My Website </h1>
          <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups</p>
        </div>
      </div>
      <div className="flex justify-center self-center  z-10">
        <div className="p-12 bg-slate-800 mx-auto rounded-3xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-100">Enter the Email </h3>
            </div>
            <div className="space-y-5">
                        <div className="space-y-2">
                                            <input className=" w-full text-base  px-4 py-2 bg-slate-800 border  border-slate-700 rounded-lg focus:outline-none focus:border-purple-400 text-white" type="text" placeholder="Email Address" value={email} onChange={(el)=>setEmail(el.target.value)}/>
              </div>
            <div>
              <button type="submit" className="w-full flex justify-center bg-violet-800  hover:bg-violet-700 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                onClick={submitHandler}>
                Submit
              </button>
            </div>
            </div>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>
                Copyright © 2021-2023
                <a href="https://codepen.io/uidesignhub" rel="" target="_blank" title="Ajimon" className="text-violet-500 hover:text-violet-600 ">AJI</a></span>
            </div>
        </div>
      </div>
  </div>
</div>
    </div>
  )
}

export default forgotPassword