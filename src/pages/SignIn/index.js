import React, { Component, useState } from 'react';
import { Link, Redirect } from "react-router-dom";

import { useAuth } from "../../services/auth";
import API from '../../services/api'


export default function SignIn()  {

        const [isLoggedIn, setLoggedIn] = useState(false);
        const [isError, setIsError] = useState(false);
        const [userName, setUserName] = useState("");
        const [password, setPassword] = useState("");
        const { setAuthTokens } = useAuth();

        function postLogin() {
            API.post("authenticate", {
              userName,
              password
            }).then(result => {
              if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
              } else {
                setIsError(true);
              }
            }).catch(e => {
              setIsError(true);
              console.log(e)
            });
        }
        if (isLoggedIn) {
            return <Redirect to="/" />;
        }
        return (
            <div className="container mx-auto mt-20">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" 
                        onChange={e => {
                            setUserName(e.target.value);
                        }}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" 
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        />
                        <p className="text-red text-xs italic">Please choose a password.</p>
                        { isError &&<p className="text-red text-xs italic">The username or password provided were incorrect!</p> }
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={postLogin} className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                            Sign In
                        </button>
                        <Link to="signup" className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                            Forgot Password?
                        </Link>
                    </div>
                </div>
            </div>
        );
    
}
