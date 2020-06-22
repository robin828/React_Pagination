import React from 'react';
import Navbar from './components/Navbar.js'
import {BrowserRouter, Route} from 'react-router-dom';
import Search from './pages/Search.js';
import User from './pages/User.js';
import Home from './pages/Home.js';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exact path="/search" render={() => <Search />}/>
      <Route exact path="/home" render={() => <Home />}/>
      <Route exact path="/user" render={() => <User />}/>
    </div>
    </BrowserRouter>
  );
}

export default App;