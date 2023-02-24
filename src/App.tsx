import React from 'react';
import logo from './logo.svg';
import * as D from './data';
import './App.css';
import ArrowComponent from './ArrowComponent';
import OnClick from './pages/OnClick';
import ReactOnClock from './pages/ReactOnClick';
import DispatchEvent from './pages/DispatchEvent';
import UsingIconWithCSSClass from './pages/UsingIconWithCSSClass';
import Bootstrap from './pages/Bootstrap';
import Icon from './pages/Icon';
import Style from './pages/Style';
import UsingIcon from './pages/UsingIcon';

function App() {
  return (
    <div className='App'>
      {/* <UsingIconWithCSSClass/>
      <UsingIcon/>
      <Style/> */}
      <Icon/>
      {/* <Bootstrap/> */}
    </div>
  );
}

export default App;
