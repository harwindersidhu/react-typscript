import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color: string;
  // color?: string; //We can make it optional using ? 
}

class App extends React.Component<AppProps> {
  render() {
    return <div>{this.props.color}</div>
  }
}

ReactDOM.render(
  <App color="red"/>,
  document.querySelector('#root')
);