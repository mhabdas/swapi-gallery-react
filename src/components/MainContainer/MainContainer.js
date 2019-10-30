import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContainer.module.scss';

const MainContainer = ({ children }) => (
  <div className={styles.main}>{children}</div>
);

export default MainContainer;

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
