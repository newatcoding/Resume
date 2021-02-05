import React from 'react';
import './Data.css';
const data= (props) =>{
    // console.log(props.text);
    switch(props.info){
        case 'Academic Profile':
            return (<div className="data">  
                {props.text.map((info,id) => (
                    <li key={id} className={'text'}>
                        <span><b>{info.Year} : </b> </span>
                        <span>{info.Degree}  | </span>
                        <span>{info.Institution}  |  </span>
                        <span>{info.Marks}  |  </span>
                    </li>
                    
                ))}
            </div>)  ;
           
        case 'Skills':
            return (<div  className="data">
                        {Object.entries(props.text).map((info,id) => (
                            <li key={id}>
                                <b>{info[0]} : </b>
                                <span>{info[1]}</span>
                            </li>
                            
                            
                        ))}
                    </div>)  ;
          
        case 'Contributions and Projects':
            return (<div  className="data">
                {props.text.map((info,id) => (
                    <li key={id}>
                        <span>{info}</span>
                    </li>
                    
                    
                ))}
            </div>)  ;
          
        case 'Position of Responsiblity':
            return (<div  className="data">
                {props.text.map((info,id) => (
                    <li key={id}>
                        <span>{info}</span>
                    </li>
                    
                    
                ))}
            </div>)  ;
        case 'Work Experience':
            return (<div  className="data">
                {props.text.map((info,id) => (
                    <li key="id">
                        <span>{info}</span>
                    </li>
                    
                    
                ))}
            </div>)  ;

        case 'References':
            return (<div  className="data">
                {props.text.map((info,id) => (
                    <li key={id}>
                        <span>{info}</span>
                    </li>
                    
                    
                ))}
            </div>)  ;
           
        case 'Declaration':
            return <li  className="data"><b>{props.text}</b></li>   ; 
        default:
            <p>EMPTY</p>  ;                                                        
    };
}

export default data;