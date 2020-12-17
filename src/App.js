import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Pages/HomePage/HomePage';
import NotFound from './components/Pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
