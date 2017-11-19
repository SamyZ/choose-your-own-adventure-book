// @flow
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import teal from 'material-ui/colors/teal';

import Home from './views/Home';
import BookMenu from './views/BookMenu';
import About from './views/About';
import Page from './views/Page';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: teal,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div style={{ height: '100%', width: '100%' }}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/books/:bookId" component={BookMenu} />
        <Route exact path="/books/:bookId/:pageId" component={Page} />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
