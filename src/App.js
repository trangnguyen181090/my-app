import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    
    render() {
        return ( 
            <div className="App">
            <h1> Hi, I 'm a React App</h1>  
            <p> This is really working </p>  
            <button>Switch Name</button>
            <Person name="Trang" age="28"/>
            <Person name="Minh" age="30">The hobbies: Racing </Person>
            <Person name="Thuy" age="20"/>
            </div>
        );
    }
}

export default App;