import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import API from "../../services/api";

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        error: ""
    };

    handleSignUp = async e => {
        e.preventDefault();
        const { username, email, password } = this.state;
        if (!username || !email || !password) {
          this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
          try {
            await API.post("users", { username, email, password });
            this.props.history.push("/");
          } catch (err) {
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
          }
        }
      };

    render(){
        return(
            <>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        {this.state.error && <p>{this.state.error}</p>}
                        <form onSubmit={this.handleSignUp}>
                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name" 
                                onChange={e => this.setState({ username: e.target.value })} />

                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                onChange={e => this.setState({ email: e.target.value })} />

                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" 
                                onChange={e => this.setState({ password: e.target.value })} />
                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password"
                                placeholder="Confirm Password" 
                                onChange={e => this.setState({ password: e.target.value })} />

                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                            >Create Account</button>
                        </form>

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
                        <Link to="/login" className="no-underline border-b border-blue text-blue" >
                            Log in
                        </Link>.
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default withRouter(SignUp);