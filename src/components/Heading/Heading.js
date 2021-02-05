import React,{Component} from 'react';

import photo from '../../assets/photo2.PNG';
import './Heading.css';
import Links from '../../containers/Links/Links';
import axios from 'axios';
class Heading extends Component{
    state={
        PersonalData:{
        },
        Links:{}
    }
    componentDidMount () {
        axios.get('https://react-resume-dc2c2-default-rtdb.firebaseio.com/PersonalData.json')
             .then(res =>{
                this.setState({PersonalData:res.data});
             });
        axios.get('https://react-resume-dc2c2-default-rtdb.firebaseio.com/links.json')
        .then(res =>{
        this.setState({Links:res.data});
        });
    }
    render(){
        
        return (
            <div className={'Heading'}>
               <img src={photo} alt="MyPhoto" style={{height:'10rem' ,margin:'1rem'}}/> 
               <div className={'Personal'}>
                    <b className={'b'}>{this.state.PersonalData.Name}</b>
                    <b className={'b'}>{this.state.PersonalData.Age}</b>
                     <b>{this.state.PersonalData.Gender}</b>
                   <b className={'b'}>{this.state.PersonalData.Phone}</b>
                  
               </div>
                <Links link={this.state.Links}/>
            </div>
 
        );
    }
}

export default Heading;