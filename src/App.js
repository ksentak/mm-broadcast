import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import SampleWork from './pages/SampleWork';
import Contact from './pages/Contact';
// import Error from './pages/Error';

// Components
import Navbar from './components/Navbar';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/transitions.css';
import './assets/css/color.css';
import './assets/css/circle.css';
import './assets/css/main.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/samplework' component={SampleWork} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
