import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TourProvider } from '@reactour/tour'

import { Placeholder,Paragraphs } from './components/utils';
import { TextPlaceholder } from './components/utils';
import {
  doSteps,
  BeachIcon,
  BoatIcon,
  BallIcon,
  GuideIcon,
  IcecreamIcon,steps,
} from './components/utils'
const demoId = 'withTour'
const iconsteps = doSteps(demoId)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <TourProvider steps={iconsteps}>
  <Placeholder demoId={demoId} />
</TourProvider>
       

        
      </header>
      <TourProvider steps={steps}>
    <Paragraphs />
  </TourProvider>

  <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
}

export default App;
