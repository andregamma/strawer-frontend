import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HeaderManagement from '../../components/HeaderManagement'
import ManagementOverview from './Overview'
import ManagementUsers from './Users'
import ManagementProducts from './Products'
import './index.css'

export default function Management(){
    return (
        <>
        <BrowserRouter basename="/management">
            <HeaderManagement />
            <Switch>
                <Route path="/" exact component={ManagementOverview} />
                <Route path="/users" exact component={ManagementUsers} />
                <Route path="/products" exact component={ManagementProducts} />
            </Switch>
        </BrowserRouter>
        </>
    )
}