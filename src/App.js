import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state={
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Stephanie', age: 29 },
      { name: 'Harsh', age: 30 },
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
      { name: newName, age: 28 },
      { name: 'Stephanie', age: 29 },
      { name: 'Harshita', age: 65 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Harshita', age: 65 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm  a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Bradley')}>Switch Name</button> {/* inefficient */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person click={this.switchNameHandler.bind(this, 'Max')} changed={this.nameChangedHandler.bind(this)} name={this.state.persons[1].name} age={this.state.persons[1].age} >I'm a Coder</Person> {/* use this mostly */}
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
