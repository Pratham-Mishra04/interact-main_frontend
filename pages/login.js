import React from 'react'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginHandler from '../handlers/loginHandler.js';
import Image from 'next/image.js';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = () =>{
        const formData={
            "username":username,
            "password":password
        };
        loginHandler(formData);
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
              <h3 className="font-semibold text-2xl text-gray-100">Sign In </h3>
              <p className="text-gray-500">Don'thave an account?  <a href="/signup" className="text-sm text-violet-700 hover:text-violet-600">Sign Up</a></p>
            </div>
            <div className="space-y-5">
                        <div className="space-y-2">
                                            <input className=" w-full text-base  px-4 py-2 bg-slate-800 border  border-slate-700 rounded-lg focus:outline-none focus:border-purple-400 text-white" type="text" placeholder="Username" value={username} onChange={(el)=>setUsername(el.target.value)}/>
              </div>
                          <div className="space-y-2">
             
              <input className="w-full content-center text-base px-4 py-2 bg-slate-800 border  border-slate-700 rounded-lg focus:outline-none focus:border-purple-400 text-white" type="password" placeholder="Enter your password" value={password} onChange={(el)=>setPassword(el.target.value)}/>
            </div>
              <div className="flex items-center justify-between">
       
              <div className="text-sm ml-auto">
                <a href="/forgotPassword" className="text-violet-700 hover:text-violet-600">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center bg-violet-800  hover:bg-violet-700 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                onClick={submitHandler}>
                Log in
              </button>
            </div>
            <div className="flex items-center justify-center space-x-2 my-5">
					<span className="h-px w-16 bg-gray-200"></span>
					<span className="text-gray-300 font-normal">or</span>
					<span className="h-px w-16 bg-gray-200"></span>
				</div>
            <div className="flex gap-4 w-full">
					<div className="w-full mb-6 flex items-center justify-center md:mb-0">
						<button type="submit" className="flex items-center justify-center bg-red-500  hover:bg-red-400 text-sm text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                <svg className="w-9" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51v-.01Z"></path></svg>
              </button>
					</div>
					<div className="w-full mb-6 flex items-center justify-center md:mb-0">
						<button type="submit" className="flex items-center justify-center bg-blue-600  hover:bg-blue-500 text-sm text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 px-">
                <svg className="w-9" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54 1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22"></path></svg>
              </button>
					</div>
          <div className="w-full mb-6 flex items-center justify-center md:mb-0">
						<button type="submit" className="flex items-center justify-center bg-blue-600  hover:bg-blue-500 text-sm text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                <Image src='/../public/GitHub-Mark-120px-plus.png' height={40} width={40}/>
              </button>
					</div>
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

export default Login