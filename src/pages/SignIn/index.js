import React, { Component, useState } from 'react';
import { Link, Redirect, withRouter } from "react-router-dom";

import { store } from 'react-notifications-component'

import { login } from "../../services/auth";
import API from '../../services/api'

// import SvgPattern from './SvgPattern'


class SignIn extends Component  {
    state = {
        mail: "",
        password: "",
        error: ""
    };
    handleSignIn = async e => {
        e.preventDefault();
        const { mail, password } = this.state;

        if (!mail || !password) {
          this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {

          try {
            const response = await API.post("/authenticate", { mail, password })
                .then((res) =>{
                    
                    console.log(res)
                    
                    if(res.data.auth){
                        login(res.data.token);
                        store.addNotification({
                            title: "Sucesso!",
                            message: "Login efetuado com sucesso.",
                            type: "success",
                            insert: "bottom",
                            container: "bottom-right",
                            animationIn: ["animated", "fadeIn"],
                            animationOut: ["animated", "fadeOut"],
                            dismiss: {
                                duration: 2000,
                                onScreen: true
                            }
                        })
                        this.props.history.push("/");
                    }
                })
                .catch((e) => {
                    
                    console.error(e)

                })
            

          } catch (err) {
            this.setState({
              error:
                "Houve um problema com o login, verifique suas credenciais. T.T"
            });
          }
        }
    };
    render() {
        const BackgroundPattern = {
            backgroundColor: "#dfdbe5",
        }
        return (
            <>
            <div className="container mx-auto mt-32">
                <div className="bg-white rounded shadow-lg flex flex-row w-full" style={{height:"500px"}}>
                    <div className="hidden md:block w-1/2 bg-cover bg-center h-full block flex-shrink-0" 
                        style={BackgroundPattern}>
                    </div>
                        <div className="p-5 w-full flex flex-col justify-center items-center">
                            <form onSubmit={this.handleSignIn}>
                                <div className="flex flex-col mb-10 w-full">
                                    <label className="block text-gray-700 text-sm font-medium pb-1" forhtml="email">
                                        E-mail
                                    </label>
                                    <input 
                                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        id="email"
                                        type="text"
                                        placeholder="seu@email.com"
                                        onChange={e => this.setState({ mail: e.target.value })}
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="block text-gray-700 text-sm font-medium pb-1" forhtml="password">
                                        Senha
                                    </label>
                                    <input 
                                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        id="password"
                                        type="password"
                                        placeholder="******" 
                                        onChange={e => this.setState({ password: e.target.value })}
                                    />
                                </div>
                                <button 
                                    className="bg-gray-700 text-white rounded py-2 px-5 w-64 mt-10"
                                    type="submit"
                                >
                                    Entrar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(SignIn)
