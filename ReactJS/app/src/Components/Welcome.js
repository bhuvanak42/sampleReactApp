import React from 'react';
import './Welcome.css';

// One way of creating Component
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }


// Another way of creating Component
export class Welcome extends React.Component {
  render() {
    return <h1 className="greeting">Hello, {this.props.name}! This is from Component Class</h1>;
  }
}