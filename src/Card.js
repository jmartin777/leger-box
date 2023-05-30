// Card.js

import React from 'react';
import './Card.css';

const Card = ({ location, description, id, deleteIdea }) => {
    return (
      <div className='card'>
        <h3>{location}</h3>
        <p>{description}</p>
        <button onClick={() => deleteIdea(id)}>🗑</button>
      </div>
    )
  }

export default Card;