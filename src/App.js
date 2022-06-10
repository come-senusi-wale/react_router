import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { data } from "./router/data";

// nav baes ::::::::::

import { Nav } from "./router/nav";

// pages ::::::::::::::
import { About } from "./router/about";
import { Contact } from "./router/contact";
import { Home } from "./router/home";
import { People } from "./router/people";
import { Error } from "./router/error";

import { Person } from "./router/person";



function App() {
  return (
    <Router>

      <Nav />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route exact path='/people'>
          <People />
        </Route>

        <Route exact path='/person/:id' children={<Person />}>
          
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
