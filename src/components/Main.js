import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login'
import Register from './registration'
import Home from './Home'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/registration' component={Register}/>
        </Switch>
    </main>
)

export default Main