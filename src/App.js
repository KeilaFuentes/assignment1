import React, { useState } from 'react';
import UserOutput from './InputComponents/UserOutput';
import UserInput from './InputComponents/UserInput';
import './App.css';


function App() {
  const[userState, setUserState]= useState({
    user:[
      {name:'Melody'}
    ],
    otherState:'some other value'
  });


  return (
    <div className="App-header" > 
      <UserOutput 
      name={userState.user[0].name}
      lastname="fuentes"/>
      <UserInput></UserInput>
    </div>
  );
}

export default App;
