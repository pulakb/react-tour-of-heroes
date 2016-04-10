import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Dashboard from './components/dashboard.component';
import Heroes from './components/heroes.component';
import HeroDetail from './components/hero-detail.component';
/*
const Links = () => {
    return (
        <nav>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/heroes'>Heroes</Link>
        </nav>
    )
};*/

const App = () => {
    return (
        <Router history= { hashHistory}>
            <Route path='/' component={ Dashboard }></Route>
            <Route path='/dashboard' component={ Dashboard }></Route>
            <Route path='/heroes' component={ Heroes }></Route>
            <Route path='/detail/:id' component={ HeroDetail }></Route>
        </Router>
    )
};

export default App;