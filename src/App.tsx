import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePageComponent from './Components/HomePageComponent';
import FirstJobPageComponent from './Components/pages/FirstJobPageComponent';
import SecoundJobPageComponent from './Components/pages/SecoundJobPageComponent';
import ThirdJobPageComponent from './Components/pages/ThirdJobPageComponent';
import FourthJobPageComponent from './Components/pages/FourthJobPageComponent';
import FifthJobPageComponent from './Components/pages/FifthJobPageComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>

  {/* Wraping our application in broswerRouter to enable Routing */}
  <Routes>
    {/* '/' deteramnds our homepage our are default rednered page. */}
    <Route path='/' element={<HomePageComponent/>}/>
    <Route path='/First' element={<FirstJobPageComponent/>}/>
    <Route path='/Second' element={<SecoundJobPageComponent/>}/>
    <Route path='/Third' element={<ThirdJobPageComponent/>}/>
    <Route path='/Fourth' element={<FourthJobPageComponent/>}/>
    <Route path='/Fifth' element={<FifthJobPageComponent/>}/>

  </Routes>
</BrowserRouter>

  );
}

export default App;
