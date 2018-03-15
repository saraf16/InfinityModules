import React from 'react';
import PropTypes from 'prop-types';
import styles from './nameCard.css';

const NameCard = ({name, email, telephone, imageUrl} ) => {
    return (
    <div className={`${styles.card}`} >
       <div style={{ backgroundImage: `url(${imageUrl})` }}> </div>
       <div>name: {name}</div>
       <div>email: {email}</div>
       <div>telephone: {telephone}</div>
    </div>
    )
}

NameCard.propTypes = {

};


const AvatarCM = ({ size, avatarUrl }) => {
    return <div style={{ backgroundImage: `url(${avatarUrl})` }} className={styles[`avatar-${size}`]}></div>;
};

AvatarCM.propTypes = {
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
    avatarUrl: PropTypes.string.isRequired
};

export default NameCard;