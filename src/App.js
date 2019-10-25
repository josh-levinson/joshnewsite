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

function NoShowsScheduled(props) {
  return (
    <div>No shows currently scheduled.</div>
  );
}

function ShowList(props) {

  function ShowButton(props) {
    return (
      <button onClick={props.click}>
        Show
      </button>
    );
  }
  const showsExist = props.showsExist;
  if (showsExist)
  {
  return <ComedyShow title="Josh's Comedy Show" startTime="8:00pm" showPrice="$8.00" />;
  }
  else {
    return <NoShowsScheduled />
  }
}

class ShowControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleHideClick = this.handleHideClick.bind(this);
    this.state = { showsVisible: true };
  }

  handleShowClick() {
    this.setState({showsVisible: true });
  }

  handleHideClick() {
    this.setState({showsVisible: false });
  }

  render() {
    const showsVisible = this.state.showsVisible; 
    let button;

    if (showsVisible) {
      button = <HideButton onClick={this.handleHideClick} />;
    } else {
      button = <ShowButton onClick={this.handleShowClick} />;
    }

    return (
      <div>
        <ShowList showsExist={showsVisible} />
        {button}
      </div>
    );
  }
}

function HideButton(props) {
  return (
    <button onClick={props.click}>
      Hide
    </button>
  );
}

function ShowButton(props) {
  return (
    <button onClick={props.click}>
      Show
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Josh Levinson" />
      </header>
      <div>
        <ShowControl />
      </div>
    </div>
  );
}

export default App;
