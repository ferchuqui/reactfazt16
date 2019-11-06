import React from 'react';

import './App.css';
function HelloWorld() {
  return(
    <div id="hello">Hello World</div>
  )
}

// const App = () => <div>This is my Component: <HelloWorld/></div>

// class App extends React.Component{
//   render(){
//     return <div>This is my Component: <HelloWorld/></div>
//   }
// }

function App() {
  return (
   <div>This is my Component: <HelloWorld/>  </div>
  );
}

export default App;
