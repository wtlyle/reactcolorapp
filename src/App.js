import React, { Component } from 'react';
import Col from "./color-box.js"
import "./Col.css"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"]
        }
    }
  render() {
    return (
      <div style={{backgroundColor: 'gray'}}>
        <Col colors = {this.state.colors}/>
      </div>
    );
  }
}

export default App;
