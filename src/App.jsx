import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div class="maincontainer">
      <div class="headermain">
        <div class="headerleft"></div>
        <div class="headercenter">
          <div class="headercenter-inner">
            <div class="headercenter1"></div>
            <div class="headercenter2"></div>
          </div>
        </div>
        <div class="headerright"></div>
      </div>
      <div class="contentmain">
        <div class="leftcontainer"></div>
        <div class="rightcontainer">
          <div class="rightcontainer1"></div>
          <div class="rightcontainer2"></div>
        </div>
      </div>
      <div class="footermain">
        <div class="footerleft"></div>
        <div class="footercenter1"></div>
        <div class="footercenter2"></div>
        <div class="footerright"></div>
      </div>
    </div>
  );
}

export default App;