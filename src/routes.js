import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Management from './pages/Management'
import Products from './pages/Products'

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/management" component={Management} />
        </Switch>
    );
}