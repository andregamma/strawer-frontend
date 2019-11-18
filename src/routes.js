import React from 'react'
import { Route } from 'react-router-dom'
import { CSSTransition } from "react-transition-group";

import PrivateRoute from './PrivateRoute';

import Home from './pages/Home'
import Management from './pages/Management'
import Products from './pages/Products'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import MyProfile from './pages/MyProfile'

import './styles.css'

const allRoutes = [
    { path: '/', name: 'Início', Component: Home },
    { path: '/products', name: 'Produtos', Component: Products },
    { path: '/products/:productId', name: 'SingleProduct', Component: SingleProduct },
    { path: '/contact', name: 'Contato', Component: Contact },
    { path: '/settings', name: 'Contato', Component: MyProfile },

    { path: '/signin', name: 'Entrar', Component: SignIn },
    { path: '/signup', name: 'Criar uma conta', Component: SignUp },
]
export default function Routes(){
    return (
            allRoutes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={800}
                            classNames="page"
                            unmountOnExit
                        >
                            <div className="page">
                                <Component />
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            ))
               
    );
}