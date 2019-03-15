import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h3> { this.props.title } </h3>
        <p> { this.props.content } </p>
      </div>
    )
  }
}

export default Card
