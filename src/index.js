import React, {Component} from 'react';
import {render} from 'react-dom';
import Color from "./Color";

class App extends Component{
    render(){
        return(
            <Color/>   
        );
    }
}

render(<App/>,document.getElementById('root'));