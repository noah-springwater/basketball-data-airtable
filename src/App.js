import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log(process.env.AIRTABLE_API);
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
