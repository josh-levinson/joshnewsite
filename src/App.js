import React from 'react';
import './App.css';


function Greeting(props) {
  return (
    <div>
      Hello, my name is {props.name}.
    </div>
  );
}

function ComedyShow(props) {
  return (
    <div className="show">
      <div className="showTitle">
        {props.title}
      </div>
      <div className="showTime">
        {props.startTime}
      </div>
      <div className="showPrice">
        {props.showPrice}
      </div>
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Josh Levinson" />
      </header>
      <Clock />
      <div>
        <ComedyShow title="Josh's Comedy Show" startTime="8:00pm" showPrice="$8.00" />
      </div>
    </div>
  );
}

export default App;
