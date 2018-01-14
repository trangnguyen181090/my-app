import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    // state
    state = {
        persons:[
            {name: 'Trang', age: 28},
            {name: 'Minh', age: 30},
            {name: 'Thuy', age: 20}
        ]
    }

    // handle onClick
    hanldebuttonSwitchName = (newName) => {
        console.log('>>> Was clicked');

        this.setState({
            persons:[
                {name: newName, age: 28},
                {name: 'Minh', age: 30},
                {name: 'Thuy', age: 20}
            ]
        })

    }

    nameChangeHandle = (event) => {
        console.log('>>>. event', event);
        console.log('>>>. event', event.target);
        console.log('>>>. event', event.target.value);
        this.setState({
            persons:[
                {name: 'Trang', age: 28},
                {name: event.target.value, age: 30},
                {name: 'Thuy', age: 20}
            ]
        })
    }

    render() {
        return ( 
            <div className="App">
            <h1> Hi, I 'm a React App</h1>  
            <p> This is really working </p>  
            <button onClick={() => this.hanldebuttonSwitchName('Trang new 123')}>Switch Name</button>
            <Person name={this.state.persons[0].name} age="28"/>
            <Person name={this.state.persons[1].name} age="30"
            click={this.hanldebuttonSwitchName.bind('click', 'New name')}
            changed={this.nameChangeHandle}>The hobbies: Racing </Person>
            <Person name={this.state.persons[2].name} age="20"/>
            </div>
        );
    }
}

export default App;