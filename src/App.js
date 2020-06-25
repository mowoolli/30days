import React, { Component } from 'react';

import Content from './components/Content'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    )
  }
}

export default App;
