import * as React from 'react';
import styles from './styles';

const itemStyle = {
  padding: '0 10px',
};

type Props = {
  onNewClick: SyntheticEvent => void,
  onContinueClick: SyntheticEvent => void,
  onAboutClick: SyntheticEvent => void,
};

const Menu = ({ onNewClick, onContinueClick, onAboutClick }: Props) => (
  <div
    style={{
      backgroundImage: `url(${styles.menuBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: styles.menuColor,
      fontSize: '36px',
      lineHeight: '108px',
    }}
  >
    <div style={itemStyle} onClick={onNewClick}>
      {'New Adventure'}
    </div>
    <div style={itemStyle} onClick={onContinueClick}>
      {'Continue'}
    </div>
    <div style={itemStyle} onClick={onAboutClick}>
      {'About'}
    </div>
  </div>
);

export default Menu;
