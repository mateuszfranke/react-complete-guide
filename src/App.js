import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons:[
            {name:"Max", age:"28"},
            {name:"Mateusz", age:"29"},
            {name:"Natalia", age:"28"},
        ],
        otherState: "some other value"
    }

    switchNameHandler = () => {
      //DON'T change state like this =>  this.state.persons[0].name = "Maximilian";
        this.setState({
            persons:[
                {name:"Maximilian", age:"28"},
                {name:"Mateusz", age:"29"},
                {name:"Natalia", age:"18"},
            ]
        })
    }

  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button onClick={this.switchNameHandler}>Switch name</button>
          <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name = {this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies: racing</Person>
          <Person name = {this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

/*    return React.createElement(
        'div',null,
            React.createElement('h1',{className:"App"},"I'm a React App!")
    );*/
  }
}

export default App;
