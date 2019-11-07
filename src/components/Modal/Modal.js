import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './Modal.module.scss';
import FlexRow from '../FlexRow/FlexRow';

const Modal = (props) => {
  const {
    children, visible, onClose,
  } = props;
  return (
    <CSSTransition in={visible} timeout={300} classNames="modal" unmountOnExit>
      <div className={styles['modal-container']}>
        <div className={styles.modal}>
          <FlexRow justifyStyle="space-between">
            <button
              onClick={onClose}
              type="button"
              className={styles['close-button']}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </FlexRow>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  children: <></>,
  visible: false,
};
