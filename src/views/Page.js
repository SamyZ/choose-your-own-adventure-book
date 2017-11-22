import * as React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

import PageHeader from './PageHeader';

const white = '#FDFDFD';
const black = '#020202';

const pageStyles = theme => ({
  main: {
    backgroundColor: localStorage.getItem('fontMode') === 'night' ? black : white,
    minHeight: '100%',
  },
  content: {
    paddingTop: '68px',
    paddingBottom: theme.spacings.large,
    paddingLeft: theme.spacings.small,
    paddingRight: theme.spacings.small,
    textAlign: 'justify',
    color: localStorage.getItem('fontMode') === 'night' ? white : black,
  },
  footer: theme.footer,
});

type PageProps = {
  title?: string,
  content: string,
  number: number,
  transitions: Array<{
    label: string,
    to: Array<{
      page: number,
      probability: Character => number,
    }>,
  }>,
};

type State = {
  title: string,
  content: string,
};

class Page extends React.Component<PageProps, State> {
  state = { title: '', content: '', transitions: [] };

  loadPage = props => {
    const { bookId, pageId } = props.match.params;
    import(`../books/${bookId}/${pageId}.json`).then(pageInfo => {
      this.setState(pageInfo);
    });
  };

  componentWillMount() {
    this.loadPage(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.loadPage(nextProps);
    window.scrollTo(0, 0);
  }

  render() {
    const { classes } = this.props;
    const { bookId } = this.props.match.params;
    return (
      <div className={classes.main} ref="elem">
        <PageHeader title={this.state.title} />
        <Typography type="body1" component="p" className={classes.content}>
          {this.state.content}
          {this.state.content}
          {this.state.content}
        </Typography>
        <div className={classes.footer}>
          {this.state.transitions.map(transition => (
            <Link to={`/books/${bookId}/page${transition.to[0].page}`} key={transition.label}>
              <Button raised color="accent" className={classes.button}>
                {transition.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(pageStyles)(Page);
