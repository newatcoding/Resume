import React from 'react';
import './Links.css';
const links =(props)=>{
    let val=(Object.entries(props.link).map((val,id)=>(
         <a key={id} className={'link'} href={`${val[1]}`}>{val[0]}  </a>
        //  console.log(props.link.val)
    )));
    return(
        <div className={'links'}>
            {val}
        </div>
    );
}

export default links;