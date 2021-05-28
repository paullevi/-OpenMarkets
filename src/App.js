import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './App.css';

const LoginPage = React.lazy(() => import('./pages/Login'));

function App() {
  return (
    <React.StrictMode>
      <Router>
        <MuiThemeProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="App">
              <Switch>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Redirect exact from="/" to="/login" />
              </Switch>
            </div>
          </Suspense>
        </MuiThemeProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
