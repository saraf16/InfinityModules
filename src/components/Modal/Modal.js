import React from 'react';
import PropTypes from 'prop-types';
import styles from './model.css';

const Modal = ({isOpen, onClose} ) => {
    return (
    <p>Þetta er Modal</p>
    )
}

Modal.Title = ({childern}) => {
    return <div>{childern}</div>
}

Modal.Body = ({childern}) => {
    return <div>{childern}</div>
}

Modal.Footer = ({childern}) => {
    return <div>{childern}</div>
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequired
};

Modal.defaultProps = {
    isOpene: false
};

export default Modal;