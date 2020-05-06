import React from 'react';
import { Router, Route } from 'react-router-dom';
import Auth from './procedures/Authentication';
import Rest from './procedures/Rest';
import Setup from './procedures/Setup';
import Forms from './procedures/Forms';
import Plans from './AppPlans';
import Header from './Header';
import history from '../history';
import Nav from './Nav';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import './App.css';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Nav></Nav>
                <Header />
                <Route path='/' exact component={StreamList}></Route>
                <Route path='/streams/new' exact component={StreamCreate}></Route>
                <Route path='/streams/edit/:id' exact component={StreamEdit}></Route>
                <Route path='/streams/delete' exact component={StreamDelete}></Route>
                <Route path='/streams/show' exact component={StreamShow}></Route>
                <Route path='/plans' component={Plans}></Route>
                <Route path='/procedures/setup' component={Setup}></Route>
                <Route path='/procedures/auth' component={Auth}></Route>
                <Route path='/procedures/forms' component={Forms}></Route>
                <Route path='/procedures/rest' component={Rest}></Route>
            </Router>
        </div>
    )
}

export default App;