import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './UserInfo.module.scss';

import Text from '../Text/Text';

const UserInfo = ({ name, type, className }) => {
  const userClass = classNames(styles['user-info'], styles[className]);

  return (
    <span className={userClass}>
      <Text className="text-bold" textToDisplay={name} />
      <Text textToDisplay={type} />
    </span>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

UserInfo.defaultProps = {
  className: 'user-info-left',
};
