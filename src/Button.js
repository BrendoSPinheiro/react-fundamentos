import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from './ThemeContext';

export function Button(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      style={{
        color: theme === 'dark' ? '#fff' : '#000',
        background: theme === 'dark' ? '#000' : '#fff',
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
