import React from 'react';
import logo from './logo.svg';
import * as D from './data';
import './App.css';

function App() {
  console.log('App Called');
  return (
    <div>
        <>
          {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
        </>
    </div>
  );
}

export default App;
