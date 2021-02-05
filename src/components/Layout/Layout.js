import React,{Component} from 'react';
// import Auxi from '../../hoc/Auxi/Auxi';
import Heading from '../Heading/Heading';
import Main from '../Main/Main';
import './Layout.css'
class Layout extends Component{
    render(){
        return (
            <div className="Layout">
                <Heading />  
                <Main />
            </div>
            
        );
    }
}

export default Layout;