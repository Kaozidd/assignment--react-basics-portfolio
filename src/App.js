import React, { Component } from 'react';
import PortFix from './components/PortFix';
import PortCont from './components/PortCont';

class App extends Component {
  render(){
    return (
      <div id="app-container">
        
        <PortFix />
        <PortCont />

      </div>
    );
  }
}

export default App;
