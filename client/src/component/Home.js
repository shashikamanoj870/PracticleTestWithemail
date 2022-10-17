import React, { Component } from 'react'
import hmeImg from '../img/Hbag.jpg'

export default class Home extends Component {
  render() {
    const myStyle={
        backgroundImage:`url(${hmeImg})`,
        height:'75vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
       <h4 className="text-muted text-right">
       You and your loved ones are safe in our <br/>internationally accredited care...
       </h4>
      </div>
    );
  }
}
