import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={repeater : ''}
    this.onChangeHandler=this.onChangeHandler.bind(this)
  }
  onChangeHandler(event){  
    this.setState({ 
     repeater: event.target.value     
    })
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={ this.onChangeHandler }/>
        <p className="repeater">{this.state.repeater}</p>
      </div>
    );
  }
}

export default App;
