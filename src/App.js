//Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
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
    <Router>
      <div className="App">
        <NavBar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          
        </Switch>
      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
