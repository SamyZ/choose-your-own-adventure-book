import * as React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

const pageStyles = theme => ({
  main: {
    backgroundColor: '#FDFDFD',
    minHeight: '100%',
  },
  content: {
    padding: '0 10px',
    textAlign: 'justify',
  },
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
  state = { title: '', content: '' };

  componentWillMount() {
    const { bookId, pageId } = this.props.match.params;
    import(`../books/${bookId}/${pageId}.json`).then(pageInfo => {
      this.setState(pageInfo);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <PageHeader />
        <Typography type="subheading" component="p">
          {this.state.title}
        </Typography>
        <Typography type="body1" component="p" className={classes.content}>
          {this.state.content}
        </Typography>
        <PageFooter />
      </div>
    );
  }
}

export default withStyles(pageStyles)(Page);
