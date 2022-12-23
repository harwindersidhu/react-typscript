import React, { useState } from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color: string;
  // color?: string; //We can make it optional using ? 
}

// class App extends React.Component<AppProps> {
//   state = { counter: 0 };

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

const App = (props: AppProps): JSX.Element => {
  const [counter, setCounter] = useState(0);

  const onIncrement = (): void => {
    setCounter((prev) => prev + 1);
  };

  const onDecrement = (): void => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
         <button onClick={onIncrement}>Increment</button>
         <button onClick={onDecrement}>Decrement</button>
         {counter}
       </div>
  );
};

ReactDOM.render(
  <App color="red"/>,
  document.querySelector('#root')
);