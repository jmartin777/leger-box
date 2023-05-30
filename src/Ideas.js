// Ideas.js

import React from 'react';
import Card from './Card';
import './Ideas.css';


function Ideas({ideas, deleteIdea}){

    const ideaCards = ideas.map(idea => {
      return (
        <Card
          location={idea.location}
          description={idea.description}
          id={idea.id}
          key={idea.id}
          deleteIdea = {deleteIdea}
        />
      )
    })
  
    return (
      <div className='ideas-container'>
        {ideaCards}
      </div>
    )
  }

export default Ideas;