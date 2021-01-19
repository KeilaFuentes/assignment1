import React from 'react';
import UserOutput from './InputComponents/UserOutput';
import UserInput from './InputComponents/UserInput';
import './App.css';


function App() {
  return (
    <div className="App-header" > 
      <UserOutput 
      name="keila"
      lastname="fuentes"/>
      <UserInput></UserInput>
    </div>
  );
}

export default App;
