import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './assets/logo.png'; // Path to your custom logo
import './App.css';
import Header from './components/Header'; // Make sure you have this component
import Footer from './components/Footer'; // Make sure you have this component
import HomePage from './pages/HomePage'; // HomePage component
import BlogPage from './pages/BlogPage'; // BlogPage component
import NotFoundPage from './pages/NotFoundPage'; // NotFoundPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/blog" component={BlogPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
