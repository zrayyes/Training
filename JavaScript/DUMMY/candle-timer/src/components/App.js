import React,{ Component } from 'react';
import {TimerList} from "./TimerList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <TimerList/>
      </div>
    );
  }
}

export default App;
