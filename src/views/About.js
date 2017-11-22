import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const aboutStyles = theme => ({
  main: theme.main,
  header: theme.header,
  content: {
    ...theme.content,
  },
  about: {
    color: theme.menuTextColor,
    padding: `0 ${theme.spacings.large}`,
    width: '100%',
  },
  footer: theme.footer,
  button: theme.button,
});

const About = ({ classes }) => (
  <div className={classes.main}>
    <Typography type="title" className={classes.header}>
      {'ABOUT'}
    </Typography>
    <div className={classes.content}>
      <Typography type="body2" className={classes.about}>
        {`This is an Open Source project to rediscover 'Choose Your Own Adventure' books and the pleasure of interactive reading. If you want to publish an interactive story here, you can reach out to me:`}
      </Typography>
      <br />
      <Typography type="body2" className={classes.about}>
        {`jeremypa.colin@gmail.com`}
      </Typography>
    </div>
    <div className={classes.footer}>
      <Link to="/">
        <Button raised color="accent" className={classes.button}>
          {'MENU'}
        </Button>
      </Link>
    </div>
  </div>
);

export default withStyles(aboutStyles)(About);
