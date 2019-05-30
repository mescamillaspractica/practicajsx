import React, {Component} from 'react';

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
    
    //Este metodo se llama cuando el componente fue renderizado
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
    //Este metodo se llama cuando el componente desaparece
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {/*
        Notese que las siguientes dos lineas son equivalentes.
        La primera llama al componente funcion definido al 
        inicio de este archivo, mientras que la segunda manipula
        el estado directamente.
        */}
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <FormattedDate date={this.state.date}/>
      </div>
    );
  }
}

export default Clock;