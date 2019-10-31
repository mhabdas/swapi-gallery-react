import React from 'react';
import PropTypes from 'prop-types';

import styles from './FlexColumn.module.scss';

const FlexColumn = ({ children }) => (
  <div className={styles['flex-column']}>{children}</div>
);

export default FlexColumn;

FlexColumn.propTypes = {
  children: PropTypes.node.isRequired,
};
