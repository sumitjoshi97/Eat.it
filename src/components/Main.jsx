import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import Reserve from './Reserve';


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />    
            <Route path="/reserve" component={Reserve} />   
        </Switch>    
    </main>
)

export default Main;