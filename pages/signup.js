import React from 'react'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signupHandler from '../handlers/signupHandler.js';

const Signup = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(12);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [uniName, setUniName] = useState("");
    const [gradYear, setGradYear] = useState(2025);
    const [phoneNo, setPhoneNo] = useState("")

    const submitHandler = async () =>{
        const formData={
            "name":name,
            "email":email,
            "age":age,
            "gradYear":gradYear,
            "uniName":uniName,
            "username":username,
            "phoneNo":phoneNo,
            "password":password,
            "confirmPassword":confirmPassword
        };
        signupHandler(formData);
    }

return (
    <div>
        <ToastContainer />
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name"
                        value={name}
                        onChange={(el)=>{setName(el.target.value)}} />

                        <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(el)=>{setUsername(el.target.value)}} />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(el)=>{setEmail(el.target.value)}} />

                        <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="University Name"
                        placeholder="University Name"
                        value={uniName}
                        onChange={(el)=>{setUniName(el.target.value)}} />

                        <input 
                        type="number"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="age"
                        placeholder="Age"
                        value={age}
                        onChange={(el)=>{setAge(el.target.value)}} />

                        <input 
                        type="number"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="gradYear"
                        placeholder="Graduation Year"
                        value={gradYear}
                        onChange={(el)=>{setGradYear(el.target.value)}} />

                        <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="Phone Number"
                        placeholder="Phone Number"
                        value={phoneNo}
                        onChange={(el)=>{setPhoneNo(el.target.value)}} />


                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(el)=>{setPassword(el.target.value)}} />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(el)=>{setConfirmPassword(el.target.value)}} />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={submitHandler}
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signup