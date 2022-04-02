import React from 'react';
import './css/App.css';
import './css/reset.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App(props) {
  return (
      <BrowserRouter>
          <div className={'wrapper'}>
              <Header />
              <div className="container">
                  <div className="nav-content-box">
                      <Nav />
                      <div className="app-wrapper-content">
                          <Route path={'/'} component={Dialogs}/>
                      </div>
                  </div>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
