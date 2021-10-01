import Home from './components/Home/Home';
import About from './components/About/About';

import './App.css';
import { Route, Router, Switch } from 'react-router';
import Friend from './components/Friend/Friend';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Friends from './components/Friends/Friends';
import Fdetails from './components/Fdetails/Fdetails';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
     <Header></Header>

      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/about">
           <About></About>
        </Route>
        <Route path="/friends">
            <Friends></Friends>
        </Route>
        <Route path="/friend/:friendId">
            <Fdetails></Fdetails>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="*">
           <NotFound></NotFound>
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
