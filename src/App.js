import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor.js'
import Previewer from './components/Previewer.js'

import React from 'react';


const InitialState = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
          - That look like this.


  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: InitialState,
      fullScren: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFullscreen = this.handleFullscreen.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleFullscreen(event) {
    if (event.target.className.baseVal == "sizeIconEditor" && this.state.fullScren != 1) {
      this.setState({
        fullScren: 1
      });
    }
    else if (event.target.className.baseVal == "sizeIconEditor" && this.state.fullScren == 1) {
      this.setState({
        fullScren: 0
      });
    }
    else if (event.target.className.baseVal == "sizeIconPreviewer" && this.state.fullScren != 2) {
      this.setState({
        fullScren: 2
      });
    }
    else if (event.target.className.baseVal == "sizeIconPreviewer" && this.state.fullScren == 2) {
      this.setState({
        fullScren: 0
      });
    }

  }
  render() {
    if (this.state.fullScren == 0) {
      return (
        <div className="App">
          <Editor value={this.state.input} onChange={this.handleChange} onFullscreen={this.handleFullscreen}/>
          <Previewer value={this.state.input} onFullscreen={this.handleFullscreen}/>
          by enszrlu
        </div>
      );
    }
    else if(this.state.fullScren == 1) {
      return (
        <div className="App">
          <Editor value={this.state.input} onChange={this.handleChange} onFullscreen={this.handleFullscreen} fullScreen={false}/>
          by enszrlu
        </div>
      );
    }
    else if(this.state.fullScren == 2) {
      return (
        <div className="App">
          <Previewer value={this.state.input} onFullscreen={this.handleFullscreen} fullScreen={false}/>
          by enszrlu
        </div>
      );
    }
    return (
      <div className="App">
        <Editor value={this.state.input} onChange={this.handleChange} onFullscreen={this.handleFullscreen}/>
        <Previewer value={this.state.input} onFullscreen={this.handleFullscreen}/>
        by enszrlu
      </div>
    );
  }
};




export default App;
