import React from 'react';
import logo from './logo.svg';
import * as D from './data';
import './App.css';
import ArrowComponent from './ArrowComponent';
import OnClick from './pages/OnClick';
import ReactOnClock from './pages/ReactOnClick';

const children = [
  <li>
    <a href='http://www.google.com' target='_blank'>
      <p>go to Google</p>
    </a>
  </li>,
];

const arrayStudy = D.makeArray(3).map((notUsed, index)=> (
  <div key = {index}>
    <p key="3">{D.randomId()}</p>
    <p key="4">{D.randomName()}</p>
    <p key="5">{D.randomJobTitle()}</p>
    <p key="6">{D.randomSentence()}</p>
    <img src = {D.randomAvatar()} width={100} height={100} />
  </div>
));

const studyTexts = [
  <p key="1">Hello</p>,
  <p key="2">World</p>
];

function App() {
  console.log('App Called');
  return (
    <div className='App'>
      <ArrowComponent href='https://www.google.com' text='go to Google'></ArrowComponent>
        <>
          {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
        </>
        <ReactOnClock></ReactOnClock>
        {/* <>
        {studyTexts}
        </>
        <>
          <ul key="ul">{children}</ul>  
          <>{arrayStudy}</>
        </> */}
    </div>
  );
}

export default App;
