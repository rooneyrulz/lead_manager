import React, { Fragment, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';

// REDUX IMPORTS
import { Provider } from 'react-redux';
import Store from './store';
import { loadUser } from './actions/auth';

// COMPONENTS
import AppHeader from './layouts/AppHeader';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Lead from './components/Lead';
import LeadDetail from './components/LeadDetail';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import setAuthToken from './utils/setAuthToken';

// PRIVATE ROUTE & ALERT
import PrivateRoute from './components/routing/PrivateRoute';
import Alert from './layouts/Alert';

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={Store}>
    <Router>
      <Fragment>
        <header>
          <AppHeader />
        </header>
        <main className='my-5'>
          <Alert />
          <Switch>
            <Container>
              <Route exact path='/' component={Home} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/leads' component={Lead} />
              <PrivateRoute exact path='/leads/:id' component={LeadDetail} />
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
    </Provider>
  );
}

export default App;
