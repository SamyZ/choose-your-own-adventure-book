import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';

const pageHeaderStyles = theme => ({
  appBar: {
    background:
      localStorage.getItem('fontMode') === 'night'
        ? theme.palette.primary[500]
        : theme.mainBackground,
  },
  toolBar: {
    minHeight: '48px',
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginTop: '5px',
  },
  menuButton: {
    height: 48,
    width: 48,
    marginRight: 15,
  },
});

const PageHeader = ({ classes, title }) => (
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar className={classes.toolBar}>
      <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
        <HomeIcon />
      </IconButton>
      <Typography type="subheading" color="inherit" className={classes.title}>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(pageHeaderStyles)(PageHeader);
