import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ManagementOverview from './Overview'
import ManagementUsers from './Users'
import ManagementProducts from './Products'

export default function RoutesManagement(){
    return (
        <BrowserRouter basename="/management">
            <Switch>
                <Route path="/" exact component={ManagementOverview} />
                <Route path="/users" component={ManagementUsers} />
                <Route path="/products" component={ManagementProducts} />
            </Switch>
        </BrowserRouter>
    );
}