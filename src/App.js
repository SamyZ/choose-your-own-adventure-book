// @flow
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import teal from 'material-ui/colors/teal';

import Home from './views/Home';
import About from './views/About';
import Settings from './views/Settings';
import BookMenu from './views/BookMenu';
import Page from './views/Page';

const flexCentered = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const spacings = {
  small: '10px',
  large: '20px',
};

const mainBackground = '#371629';
const menuTextColor = '#ffffff';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: red,
  },
  mainBackground,
  menuTextColor,
  button: {
    marginBottom: spacings.large,
    width: '240px',
  },
  spacings: spacings,
  main: {
    background: mainBackground,
    color: menuTextColor,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '40px',
    flexShrink: 0,
    height: '100px',
    color: menuTextColor,
    textTransform: 'uppercase',
  },
  content: {
    flex: '1 0 auto',
  },
  footer: {
    ...flexCentered,
    flexDirection: 'column',
    flexShrink: 0,
    paddingBottom: spacings.large,
  },
  flexCentered,
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div style={{ height: '100%', width: '100%' }}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/books/:bookId" component={BookMenu} />
        <Route exact path="/books/:bookId/:pageId" component={Page} />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
