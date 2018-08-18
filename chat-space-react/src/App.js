import React, { Component } from 'react';

import Header from './components/header';
import Conversation from './components/conversation';

import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Conversation/>
      </div>
    );
  }
}

export default App;
