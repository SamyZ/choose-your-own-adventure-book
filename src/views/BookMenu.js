import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const bookMenuStyles = theme => ({
  main: theme.main,
  header: {
    ...theme.header,
    flexDirection: 'column',
    alignItems: 'center',
  },
  footer: theme.footer,
  button: theme.button,
  actions: {
    ...theme.content,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookAuthor: {
    paddingTop: '0.8rem',
    fontSize: '0.8rem',
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
              {'CONTINUE'}
            </Button>
          </Link>
          <Link to={`${this.props.location.pathname}/page1`}>
            <Button raised color="primary" className={classes.button}>
              {'NEW ADVENTURE'}
            </Button>
          </Link>
          <Link to={`${this.props.location.pathname}/Credits`}>
            <Button raised color="primary" className={classes.button}>
              {'CREDITS'}
            </Button>
          </Link>
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
  }
}

export default withStyles(bookMenuStyles)(BookMenu);
