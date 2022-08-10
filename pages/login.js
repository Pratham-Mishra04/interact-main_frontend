import React from 'react'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginHandler from '../handlers/loginHandler.js';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async () =>{
        const formData={
            "username":username,
            "password":password
        };
        loginHandler(formData);
    }

return (
    <div>
        <ToastContainer />
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Log In</h1>

                        <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(el)=>{setUsername(el.target.value)}} />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(el)=>{setPassword(el.target.value)}} />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={submitHandler}
                    >Submit</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By loggin in, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Dont have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../signup/">
                        Sign Up
                    </a>.
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login