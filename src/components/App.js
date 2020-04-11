import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Procedures from './Procedures';
import Plans from './AppPlans';
import Home from './Home';
import Nav from './Nav';
import './App.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Nav></Nav>
                {/* <div> */}
                <Route path='/' exact component={Home}></Route>
                <Route path='/plans' component={Plans}></Route>
                <Route path='/procedures' component={Procedures}></Route>
                {/* </div> */}
            </BrowserRouter>
        </div>
    )
}

export default App;