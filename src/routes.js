import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Management from './pages/Management'
import Products from './pages/Products'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:productId" exact component={SingleProduct} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/management" component={Management} />
        </Switch>
    );
}