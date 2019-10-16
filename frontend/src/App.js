import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';

// COMPONENTS
import AppHeader from './layouts/AppHeader';
import Home from './components/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => {
  return (
    <Router>
      <Fragment>
        <header>
          <AppHeader />
        </header>
        <main className='my-5'>
          <Switch>
            <Container>
              <Route exact path='/' component={Home} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Container>
          </Switch>
        </main>
        <hr />
        <footer>
          <p className='text-center lead text-muted'>
            <strong>Lead Manager </strong> &copy; By Ruzny MA
          </p>
        </footer>
      </Fragment>
    </Router>
  );
}

export default App;
