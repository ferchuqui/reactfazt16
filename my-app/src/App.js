import React from 'react';

import './App.css';
function HelloWorld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
}

// const App = () => <div>This is my Component: <HelloWorld/></div>

// class App extends React.Component{
//   render(){
//     return <div>This is my Component: <HelloWorld/></div>
//   }
// }

function App() {
  return (
    <div>
      This is my Component:{' '}
      <HelloWorld mytext="Hola Fernando" subtitle="Component 1" />
      <HelloWorld mytext="Hola Mundo" subtitle="Component 2" />
      <HelloWorld mytext="Hello" subtitle="Component 3" />
    </div>
  );
}

export default App;
