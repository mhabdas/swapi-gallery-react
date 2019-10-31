import { RotateLoader } from 'react-spinners';
import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.spinner}>
    <RotateLoader sizeUnit="px" size={25} color="#cebc81" loading />
  </div>
);

export default Loader;
