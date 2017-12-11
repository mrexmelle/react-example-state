import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={ other_selected: false, other_value: "" };
  }

  onColorSelected = (event) =>
  {
    console.log("App::onColorSelected - (name, value): (" + event.target.name + ", " + event.target.value + ")");
    this.setState( {other_selected: event.target.value==="other", other_value: ""} );
  }

  onOtherChanged = (event) =>
  {
    this.setState( {other_value: event.target.value} );
  }

  render() {

    return (
      <div className="App">
        <div>
          <p>What is your favorite color?</p>
        </div>
        <p style={{"color":"red"}}>
          <input type="radio" name="favorite_color" value="red" onClick={this.onColorSelected}/>
          <span>Red</span>
        </p>
        <p style={{"color":"green"}}>
          <input type="radio" name="favorite_color" value="green" onClick={this.onColorSelected}/>
          <span>Green</span>
        </p>
        <p style={{"color":"blue"}}>
          <input type="radio" name="favorite_color" value="blue" onClick={this.onColorSelected}/>
          <span>Blue</span>
        </p>
        <p>
          <input type="radio" name="favorite_color" value="other" onClick={this.onColorSelected}/>
          <span>
            <input type="text" name="other_color" placeholder="Other"
              value={this.state.other_value}
              onChange={this.onOtherChanged}
              disabled={this.state.other_selected ? "" : "disabled"} />
          </span>
        </p>
      </div>
    );
  }
}

export default App;
