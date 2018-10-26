import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal/Modal';


class App extends Component {
  state={
    show:false
  }
  showModel=()=>{
    this.setState({
      ...this.state,
      show:!this.state.show
    })
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.showModel} >Show Modal</button>
        <Modal show={this.state.show} onClose={this.showModel}>
            <h2>I am From The Modal Text</h2>
            <h3>And some thing else Herer</h3>
            
        </Modal>

      </div>
    );
  }
}

export default App;
