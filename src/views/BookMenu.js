import * as React from 'react';
import { Link } from 'react-router-dom';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

const bookMenuStyles = theme => ({
  main: {
    background: styles.mainBackground,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  header: {
    ...styles.flexCentered,
    flexDirection: 'column',
    flexShrink: 0,
    height: '150px',
    color: styles.menuTextColor,
    textTransform: 'uppercase',
  },
  footer: {
    ...styles.flexCentered,
    flexShrink: 0,
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 0 auto',
  },
  button: {
    marginBottom: '40px',
    width: styles.buttonWidth,
  },
  bookAuthor: {
    paddingTop: '0.8rem',
    fontSize: '0.8rem',
  },
  buttonAbout: {
    marginBottom: '40px',
    width: styles.buttonWidth,
    background: styles.secondaryButtonColor,
    color: styles.menuTextColor,
  },
});

class BookMenu extends React.Component {
  state = { title: '', author: '', id: '', credits: '' };

  componentWillMount() {
    import(`../books/${this.props.match.params.bookId}/main.json`).then(bookInfo => {
      this.setState(bookInfo);
    });
  }

  render() {
    const { classes } = this.props;
    const { author, title } = this.state;
    return (
      <div className={classes.main}>
        <Typography type="title" className={classes.header}>
          <span>{title}</span>
          <span className={classes.bookAuthor}>{author}</span>
        </Typography>
        <div className={classes.actions}>
          <Link to="/about">
            <Button raised color="primary" className={classes.button}>
              {'Continue'}
            </Button>
          </Link>
          <Link to={`${this.props.location.pathname}/page1`}>
            <Button raised color="primary" className={classes.button}>
              {'New Adventure'}
            </Button>
          </Link>
          <Link to="/">
            <Button raised color="primary" className={classes.button}>
              {'Main Menu'}
            </Button>
          </Link>
        </div>
        <div className={classes.footer}>
          <Link to={`${this.props.location.pathname}/Credits`}>
            <Button raised color="primary" className={classes.buttonAbout}>
              {'Credits'}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(bookMenuStyles)(BookMenu);
