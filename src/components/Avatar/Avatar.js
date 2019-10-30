import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Avatar.module.scss';

const Avatar = ({ imgSrc, className }) => {
  const avatarClass = classNames(styles.img, styles[className]);

  return <img className={avatarClass} src={imgSrc} alt="avatar" />;
};

export default Avatar;

Avatar.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  className: 'img-small',
};
