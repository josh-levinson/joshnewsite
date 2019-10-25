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
  const showsExist = props.showsExist;
  if (showsExist)
  {
  return <ComedyShow title="Josh's Comedy Show" startTime="8:00pm" showPrice="$8.00" />;
  }
  else {
    return <NoShowsScheduled />
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Josh Levinson" />
      </header>
      <div>
        <ShowList showsExist={false} />
      </div>
    </div>
  );
}

export default App;
