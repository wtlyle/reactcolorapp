import React, { Component } from 'react';
import './Col.css'

class Col extends Component {
    constructor(props) {
        super(props)
        this.state = {

            //
            // colors: ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"],

            currentIndex: 0
        }

    }
  render() {
      const { currentIndex} = this.state
      const { colors } = this.props

    return (
      <div className = 'box' style={{backgroundColor : (currentIndex === 0 ? colors[8] : colors[currentIndex -1])}} onClick={this.clickHandler}>
        <p style={{color: colors[currentIndex]}}>
            {colors[currentIndex]}
        </p>
      </div>
    );
  }

 clickHandler=()=> {
     console.log(this)
    let { currentIndex } = this.state
    console.log("Clicked")
    if (currentIndex == this.props.colors.length - 1) {
        this.setState({currentIndex : 0})
    } else {
    this.setState({currentIndex : currentIndex + 1})
    console.log(this)
    }
 }
 //
 // let asciify = require('asciify')



  /*// clickHandler (this.state.colors) {
  //     for(let i = 0; i < this.state.colors.length; i++) {
  //       return <p>arr[i]</p>
  //     }
  // }*/

}



export default Col;
