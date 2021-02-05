import React from 'react';
 import photo from '../../assets/photo.jpg';
import './Logo.css'
const logo = (props) => (
    <div className={"Logo"} style={{height:props.height, margin:props.margin}}>
        <img src={photo} alt="My Photo" />
    </div>
);

export default logo;