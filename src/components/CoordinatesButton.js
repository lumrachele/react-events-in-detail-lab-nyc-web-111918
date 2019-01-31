import React from 'react';

export default class CoordinatesButton extends React.Component{

  handleClick=(event)=>{
    const xCoord = event.clientX
    const yCoord = event.clientY
    // console.log(event.clientX, event.clientY);
    this.props.onReceiveCoordinates([xCoord, yCoord])

  }

  render(){
    return (
      <button onClick={this.handleClick}>Coords</button>
    )
  }
}
