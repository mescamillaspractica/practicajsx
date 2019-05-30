import React, {Component} from 'react';

//este arreglo es JS normal
const colors=["#FF0033","#43D51C","#1C73D5","#D4B487","#920238"];

//Esta funcion flecha tambien lo es
const randomColor = () => {
    return colors[Math.floor(Math.random()*colors.length)+1];
}
/*
esta clase extiende Component, por lo que hace uso de JSX y React.
Sin embargo, interactua con la funcion definida previamente 
sin problema.
*/
class Color extends Component{

    constructor(props){
        super(props);
        this.state={
            color:randomColor()
        }
        this.setNewColor = this.setNewColor.bind(this);
    }
    
    setNewColor(){
        const newColor = randomColor();
        this.setState({
            color: newColor
        })
    }
        
    render(){
        return(
            <div style={{backgroundColor:this.state.color}}>
                <button onClick = {this.setNewColor}>
                    Color al azar
                </button>
            </div>  
        );
    }
}
/*En este archivo no renderizamos, solamente exportamos
el componente.*/
export default Color;