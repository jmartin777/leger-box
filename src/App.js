import React, { Component } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import APIcalls from './APIcalls'
import './App.css';
import acquireInfo from './APIcalls';
import { updateInfo, deleteTrip } from './APIcalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  componentDidMount() {
    acquireInfo()
    .then(data =>{
      console.log()
      this.setState({ideas: [...data]})
    })
    .catch(() => this.setState({error: "That's not a very fungi!"}))
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }
  
  updateAPIinfo = (newIdea) => {
    //console.log(newIdea)
    updateInfo(newIdea);
  }
  deleteIdea = (id) => {
    console.log(id);
    const filteredIdeas = this.state.ideas.filter(idea => idea.id != id);
    deleteTrip(id);
    this.setState({ ideas: filteredIdeas });
  }

  render() {
    return(
      <main className='App'>
        <h1>UFO Claims</h1>
        {!this.state.ideas.length && <h2>No abductions yet -- add some!</h2> }
        <Form addIdea={this.addIdea} updateAPIinfo={this.updateAPIinfo}  />
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}  />
      </main>
    )
  }
}

export default App;