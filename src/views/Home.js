import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import books from '../books/books.json';
import styles from './styles';

const homeStyles = theme => ({
  main: {
    background: styles.mainBackground,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  header: {
    ...styles.flexCentered,
    flexShrink: 0,
    height: '100px',
    color: styles.menuTextColor,
    textTransform: 'uppercase',
  },
  footer: {
    ...styles.flexCentered,
    flexShrink: 0,
  },
  booksList: {
    ...styles.flexCentered,
    flexDirection: 'column',
    flex: '1 0 auto',
  },
  button: {
    marginBottom: '40px',
    width: styles.buttonWidth,
  },
  buttonContent: {
    ...styles.flexCentered,
    flexDirection: 'column',
  },
  bookTitle: {},
  bookAuthor: {
    paddingTop: '0.4rem',
    fontSize: '0.6rem',
  },
  buttonAbout: {
    marginBottom: '40px',
    width: styles.buttonWidth,
    background: styles.secondaryButtonColor,
    color: styles.menuTextColor,
  },
});

const BookCard = ({ author, id, title }, classes) => (
  <Link to={`/books/${id}`} key={id}>
    <Button raised color="primary" className={classes.button}>
      <div className={classes.buttonContent}>
        <div className={classes.bookTitle}>{title}</div>
        <div className={classes.bookAuthor}>{author}</div>
      </div>
    </Button>
  </Link>
);

const Home = ({ classes }) => (
  <div className={classes.main}>
    <Typography type="title" className={classes.header}>
      {'ADVENTURE BOOKS'}
    </Typography>
    <div className={classes.booksList}>{books.map(book => BookCard(book, classes))}</div>
    <div className={classes.footer}>
      <Link to="/about">
        <Button raised color="primary" className={classes.buttonAbout}>
          {'About'}
        </Button>
      </Link>
    </div>
  </div>
);

export default withStyles(homeStyles)(Home);
