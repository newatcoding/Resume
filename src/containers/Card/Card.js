import React from 'react';
import './Card.css'
const card= (props) =>{
    return (
        <div key={props.Skey} className={"card"}>
            <span className="head"><b><u>{props.info}</u></b></span>
        </div>
    );
}


export default card;