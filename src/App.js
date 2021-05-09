//Components
import NavBar from './components/NavBar';
//Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
//CSS
import './App.css'
//From React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar />
        
        <Switch>
          <Route exact path="/MySite" component={Home} />
          <Route path="/MySite/about" component={About} />
          <Route path="/MySite/projects" component={Projects} />
          
        </Switch>
      
        
      </div>
    </Router>
  );
}

export default App;
