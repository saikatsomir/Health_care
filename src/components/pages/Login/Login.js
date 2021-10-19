import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'

//SING IN METHOD IMG
const google = "https://i.ibb.co/wpR2N7g/google.png"
const github = "https://i.ibb.co/Yh9C3bQ/github.png"
const facebook = "https://i.ibb.co/ySLfkbz/facebook.png"
const Login = () => {
    const {error, signInUsingGoogle, signInUsingGithub, handleLogin, handleEmailLogin, handlePasswordLogin,setError, toggleLogin,isLogin,handleResetPassword,handleEmailName,setIsLoading} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_uri = location.state?.from || '/home'
    //GOOGLE LOGIN
    const googleLogIn = () =>{
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_uri)  
            setError('')       
        })
        .finally(()=>setIsLoading(false))
    }
    //GITHUB LOGIN
    const githubLogin = () =>{
        signInUsingGithub()
        .then(result =>{
            history.push(redirect_uri)
            setError('')
        })
        .finally(()=>setIsLoading(false))
    }
    return (
        <div className="login bg-gray-200">
                <div className="py-20">
                    <div>
                        <h1 className="mb-12 text-5xl">Please {isLogin? 'Sign Up' : 'Log In'}</h1>
                    <i className="fas fa-user fa-4x border rounded-full px-12 py-10 bg-gray-50"></i>
                    </div>
                    <form onSubmit={handleLogin}>
                      {isLogin && <input onBlur={handleEmailName} className="outline-none w-72 bg-gray-200" type="name" name="name" placeholder="Your Name" className="w-72" required />}<br /><br />
                      <input onBlur={handleEmailLogin} className="outline-none w-72 bg-gray-200" type="email" name="email" id="email" placeholder="E-mail ID" className="w-72" required /><br /><br />
                      <input onBlur={handlePasswordLogin} type="password" name="password" id="password" placeholder="Password" className="outline-none w-72 bg-gray-200 " required/><br /><br />
                      <input type="submit" value={isLogin? 'Login':'Register'} className="w-64 border cursor-pointer py-2 text-white font-bold text-xl bg-gray-400" /> <br />
                      <button onClick={handleResetPassword} className="border-none text-xl ml-2">Forget Password...</button>
                    </form>
                    <div><br />
                    {error} <br /><br />
               <h1>     Already Have An Account?
                    <input onChange={toggleLogin} className="ml-2 text-green-400 hover:underline text-xl " type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="vehicle1"> Sign Up</label>
               </h1>
                        <h1 className=" mt-2 lg:text-xl font-semibold ">_____________ Other Way to Login _____________</h1>
                        <br />
                        <br />
                        <div className="justify-center 	 flex gap-20 ">
                            <img className="cursor-pointer" width="40px" src={facebook} alt="" />
                          <button onClick={googleLogIn}>
                                <img className="cursor-pointer" width="40px" src={google} alt="" />
                                </button>
                           <button onClick={githubLogin}>
                           <img className="cursor-pointer" width="40px" src={github} alt="" />
                           </button>
                            
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Login;