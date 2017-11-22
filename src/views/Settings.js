import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Radio from 'material-ui/Radio';
import { FormLabel } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';
import NightIcon from 'material-ui-icons/Brightness3';
import SunIcon from 'material-ui-icons/WbSunny';

const fontSizes = ['10px', '12px', '14px', '16px', '18px'];

const setttingsStyle = theme => ({
  main: theme.main,
  header: theme.header,
  content: {
    ...theme.content,
    ...theme.flexCentered,
    flexDirection: 'column',
  },
  fontLegend: {
    ...theme.flexCentered,
    marginBottom: '40px',
  },
  modeLegend: {
    ...theme.flexCentered,
    marginTop: '60px',
    padding: `0 ${theme.spacings.large}`,
  },
  legend: {
    color: 'inherit',
  },
  fontSizeLabelGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: '-5px',
    width: '100%',
    maxWidth: '600px',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '600px',
  },
  radioChecked: {},
  radioDefault: {
    color: 'inherit',
  },
  modeGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconActive: {
    fill: theme.palette.primary[500],
  },
  iconDefault: {},
  footer: theme.footer,
  button: theme.button,
});

const iconStyle = {
  width: 48,
  height: 48,
  padding: '10px',
  margin: '30px',
  cursor: 'pointer',
};

type Props = {
  classes: Object,
};

type State = {
  fontSize: '10px' | '12px' | '14px' | '16px' | '18px',
  fontMode: 'day' | 'night',
};

class Settings extends React.PureComponent<Props, State> {
  state = {
    fontSize: localStorage.getItem('fontSize') || '12px',
    fontMode: localStorage.getItem('fontMode') || 'day',
  };

  setFontSize = event => {
    const fontSize = event.target.value;
    this.setState({ fontSize });
    localStorage.setItem('fontSize', fontSize);
  };

  setDayMode = () => {
    this.setState({ fontMode: 'day' });
    localStorage.setItem('fontMode', 'day');
  };

  setNightMode = () => {
    this.setState({ fontMode: 'night' });
    localStorage.setItem('fontMode', 'night');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Typography type="title" className={classes.header}>
          {'SETTINGS'}
        </Typography>
        <div className={classes.content}>
          <div className={classes.fontLegend}>{'Select your favorite reading font size:'}</div>
          <div className={classes.fontSizeLabelGroup}>
            {fontSizes.map(fontSize => (
              <FormLabel
                component="legend"
                className={classes.legend}
                style={{ fontSize }}
                key={fontSize}
              >
                {'Hi'}
              </FormLabel>
            ))}
          </div>
          <div className={classes.radioGroup}>
            {fontSizes.map(fontSize => (
              <Radio
                checked={this.state.fontSize === fontSize}
                onChange={this.setFontSize}
                value={fontSize}
                aria-label={fontSize}
                key={fontSize}
                className={
                  this.state.fontSize === fontSize ? classes.radioChecked : classes.radioDefault
                }
              />
            ))}
          </div>
          <div className={classes.modeLegend}>{'Mode:'}</div>
          <div className={classes.modeGroup}>
            <SunIcon
              style={iconStyle}
              className={this.state.fontMode === 'day' ? classes.iconActive : classes.iconDefault}
              onClick={this.setDayMode}
            />
            <NightIcon
              style={iconStyle}
              className={this.state.fontMode === 'night' ? classes.iconActive : classes.iconDefault}
              onClick={this.setNightMode}
            />
          </div>
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

export default withStyles(setttingsStyle)(Settings);
