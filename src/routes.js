import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute';

import Home from './pages/Home'
import Management from './pages/Management'
import Products from './pages/Products'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:productId" exact component={SingleProduct} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />

            <Route path="/contact" exact component={Contact} />
            <PrivateRoute path="/management" component={Management} />
        </Switch>
    );
}