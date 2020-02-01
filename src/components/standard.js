import React from 'react';
import { MDBIcon } from "mdbreact";

class StandardCell extends React.Component {

  render(){
    return (
      <div>
        <div className={`container--icons--${this.props.container.state}`}>
            <MDBIcon className='action--button' icon="play" value="start"/>
            <MDBIcon className='action--button' icon="stop" value="stop"/>
            <MDBIcon className='action--button' icon="bug" value="debug"/>
            <MDBIcon className='action--button' icon="check" value="disposition"/>  
        </div>
        
          
        <div className='container--name'>NAME: {this.props.container.name}</div>
        <div className='container--message'>SN: {this.props.container.serial_number}</div>
        <div className='container--message'>PID: {this.props.container.PID}</div>

      </div>
      );
  }
}

export default StandardCell;
