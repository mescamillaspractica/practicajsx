
# Practica de React y JSX
## Configuración del ambiente
Se debe actualizar npm y node. Node debe estar en versión 8 o superior para correr el comando create-react-app,  el cual simplifica el proceso de montar la configuración del proyecto. Los siguientes comandos deben correrse en la terminal para realizar dicho proceso.
```
npm update npm -g
nvm install 12.3.1
nvm use 12.3.1
npx create-react-app practicajsx
```
Una vez generado el proyecto procedemos a borrar todos los archivos de la carpeta src. Una buena practica en proyectos de react es escribir los nombres de los archivos que tienen componentes en mayúscula. Ej: ReactComponent.js, esto no solamente se hace por convención sino porque al momento de compilar el código, react toma los elementos en minúscula como etiquetas del DOM (Document Object Model) y no como elementos creados por el usuario.

Creamos el archivo "index.js" dentro de la carpeta src.
src
└ index.js
El resto de la practica sera dentro de la carpeta src.

## El ciclo de vida de los componentes
React maneja componentes, elementos encapsulados que conforman la interfaz gráfica. Surge el interés de saber cuando un componente se carga por primera vez en la pagina, su estado cambia, se actualiza de alguna manera y desaparece. A esto se le llama "ciclo de vida" 

En general, podemos identificar cuatro fases en el ciclo de vida de un componente:

1. **Mounting.** Todo lo que ocurre antes de renderizar el componente en la pagina.
2. **Updating.** Todo lo que ocurre una vez el componente ya esta renderizado en la pagina.
3. **Unmounting.** Todo lo que ocurre cuando el componente se remueve de la pagina. 
4. **Errors.** Esta fase es opcional, ocurre cuando hay un error en los métodos de ciclo de vida de los descendientes del componente. 

React provee ciertos métodos los cuales podemos sobrecargar para que el componente se comporte como nosotros queramos en estos momentos importantes, llamados "métodos del ciclo de vida".
## Aplicación base
La aplicación mas pequeña en React que se puede hacer consiste en el siguiente código:

```javascript
import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component{
    render(){
        return(
            <h1>Hello React!</h1>    
        );
    }
}

render(<App/>,document.getElementById('root'));
```
El único método obligatorio para cualquier componente es render(). Cuando este método se llama, retorna todos los elementos JSX que forman un componente. Cabe resaltar que el método render de la ultima linea es distinto al que se encuentra dentro de la clase. Este ultimo método pertenece a react-dom, el paquete que permite renderizar los componentes. 
## Colores aleatorios
Como primera practica, vamos a crear un componente sencillo: un div cuyo color de fondo pueda cambiarse aleatoriamente con un botón.

Lo primero es modificar index.js para que se vea así:
```javascript
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
```
Ahora, vamos a crear otro archivo en la carpeta src llamado "Color.js"
src
└ index.js
└Color.js
Y escribiremos el siguiente codigo:
```javascript
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
```
En este código usamos dos métodos del ciclo de vida de los componentes: *constructor()* y *render()*. Ambos corresponden a la fase de **Mounting** del componente, es decir, la fase en donde se prepara todo lo necesario para que el componente sea integrado al DOM. 
En *constructor()* se crea el estado inicial del componente y se "anclan" los métodos del usuario a este.
En el ejemplo, el "anclaje" se realiza con la siguiente linea de código dentro de *constructor()*:
```javascript
this.setNewColor = this.setNewColor.bind(this);
```
 Esto se debe hacer debido al comportamiento "extraño" de *this* en JavaScript. Para saber mas sobre este tema pueden leer [este articulo.]([https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/))





