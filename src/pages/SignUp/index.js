import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import API from "../../services/api";

import { store } from 'react-notifications-component';

import Pattern from './Pattern.svg'

class SignUp extends Component {
    state = {
        name: "",
        mail: "",
        password: "",
        error: ""
    };

    handleSignUp = async e => {
        e.preventDefault();
        const { login, name, mail, password } = this.state;
        if (!login || !name || !mail || !password) {
          this.setState({ error: "Preencha todos os dados para se cadastrar." });
        } else {
          try {
            await API.post("/users", { login, name, mail, password });
            store.addNotification({
                title: "Conta criada com sucesso!",
                message: "Redirecionando em 2 segundos ...",
                type: "sucess",
                insert: "bottom",
                container: "bottom-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 2000,
                    onScreen: true
                }
            })
            this.props.history.push("/signin");
          } catch (err) {
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
          }
        }
      };

    render(){
        const BackgroundPattern = {
            backgroundColor: "#dfdbe5",
            backgroundImage: `url(${Pattern})`,
            backgroundPosition: 'cover'
        }
        return(
            <>
            <div className="container mx-auto md:px-32 mt-32">
                <div className="bg-white rounded shadow-lg flex flex-row-reverse w-full" style={{height:"500px"}}>
                    <div className="hidden md:block w-2/4 bg-cover bg-center h-full block flex-shrink-0" 
                        style={BackgroundPattern}>
                    </div>
                        <div className="p-5 w-full flex flex-col">
                            <form onSubmit={this.handleSignUp}>
                                <div className="flex flex-row">
                                    <div className="flex flex-col mb-10 w-full">
                                        <label className="block text-gray-700 text-sm font-medium pb-1" forhtml="email">
                                            Nome de usuário
                                        </label>
                                        <input 
                                            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                            id="username"
                                            type="text"
                                            placeholder="fulano123"
                                            onChange={e => this.setState({ login: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex flex-col mb-10 px-4 w-full">
                                        <label className="block text-gray-700 text-sm font-medium pb-1" forhtml="email">
                                            Nome completo
                                        </label>
                                        <input 
                                            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                            id="name"
                                            type="text"
                                            placeholder="Fulano"
                                            onChange={e => this.setState({ name: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-10 w-full">
                                    <label className="block text-gray-700 text-sm font-medium pb-1" forhtml="email">
                                        E-mail
                                    </label>
                                    <input 
                                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        id="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        onChange={e => this.setState({ mail: e.target.value })}
                                    />
                                </div>
                                <div className="flex flex-col mb-10 w-full">
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
                                <div className="flex flex-col w-full">
                                    <label className="block text-gray-700 text-sm font-medium pb-1" forhtml="password">
                                        Confirme a senha
                                    </label>
                                    <input 
                                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        id="password2"
                                        type="password"
                                        placeholder="******" 
                                        onChange={e => this.setState({ password: e.target.value })}
                                    />
                                </div>
                                {this.state.error && store.addNotification({
                                    title: "Opa!",
                                    message: this.state.error,
                                    type: "danger",
                                    insert: "bottom",
                                    container: "bottom-right",
                                    animationIn: ["animated", "fadeIn"],
                                    animationOut: ["animated", "fadeOut"],
                                    dismiss: {
                                        duration: 2000,
                                        onScreen: true
                                    }
                                })}
                                <button 
                                    className="bg-gray-700 text-white rounded py-2 px-5 w-64 mt-10 float-right"
                                    type="submit"
                                >
                                    Entrar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(SignUp);