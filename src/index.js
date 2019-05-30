import React, {Component} from 'react';
import {render} from 'react-dom';
import Color from "./Color";
import Clock from "./Clock";
import Request from './Request';

class App extends Component{
    render(){
        return(
            <React.Fragment>
                <Color/> 
                <Clock/>
                <Request/>
            </React.Fragment>
        );
    }
}

render(<App/>,document.getElementById('root'));