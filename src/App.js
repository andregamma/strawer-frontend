import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import { AuthContext } from "./services/auth";
import Header from './components/Header'
import Routes from './routes'


function App() {
    const [authTokens, setAuthTokens] = useState();
    
    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }
    return (
        <div className="App overflow-x-hidden">
            <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
                <BrowserRouter>
                    <Header />
                    <Routes />
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
        );
    }
    
    export default App;
    