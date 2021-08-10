import React from 'react';
import Homecontrol from './Component/Homecontrol';
import { Contextprovider } from './Context';
import './App.css';

function App() {
  return (<Contextprovider>
     <Homecontrol/>
   </Contextprovider>)}

export default App;

