import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import books from '../books/books.json';

const homeStyles = theme => ({
  main: theme.main,
  header: theme.header,
  footer: theme.footer,
  button: theme.button,
  booksList: {
    ...theme.content,
    ...theme.flexCentered,
    flexDirection: 'column',
  },
  bookButtonContent: {
    ...theme.flexCentered,
    flexDirection: 'column',
  },
  bookAuthor: {
    paddingTop: '0.4rem',
    fontSize: '0.7rem',
  },
});

const BookCard = ({ author, id, title, classes }) => (
  <Link to={`/books/${id}`} key={id}>
    <Button raised color="primary" className={classes.button}>
      <div className={classes.bookButtonContent}>
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
    <div className={classes.booksList}>
      {books.map(book => <BookCard {...book} key={book.id} classes={classes} />)}
    </div>
    <div className={classes.footer}>
      <Link to="/settings">
        <Button raised color="accent" className={classes.button}>
          {'SETTINGS'}
        </Button>
      </Link>
      <Link to="/about">
        <Button raised color="accent" className={classes.button}>
          {'ABOUT'}
        </Button>
      </Link>
    </div>
  </div>
);

export default withStyles(homeStyles)(Home);
