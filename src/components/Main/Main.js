import React,{Component} from 'react';
// import Auxi from '../../hoc/Auxi/Auxi';
import './Main.css';
import Card from '../../containers/Card/Card';
import Data from '../../containers/Data/Data';
import axios from 'axios';
import Spinner from '../../hoc/Spinner/Spinner';
class Main extends Component{
    state={
        control:{}
    }
    componentDidMount() {
        axios.get('https://react-resume-dc2c2-default-rtdb.firebaseio.com/controls.json')
             .then(res =>{
                 
                 this.setState({control:res.data});
             })
            
        //  console.log(this.state.control, "hello");     
    }
    render(){
        // console.log(this.state.control, "helllo ut");
        let data=<Spinner/>;
        if(this.state.control ){
            data=(Object.entries(this.state.control).map((heading, index)=>(
                <div key={index}>
                    <Card Skey={index} info={heading[0]}/>
                    {heading[1].text?<Data info={heading[0]} text={heading[1].text}/>:null}
                    {/* {console.log(heading, "pepcoding")} */}
                </div>
                
               
            )) );
        }
        
        return (
            <div className={'Main'}>
                {data}
            </div>
            
        );
    }
}

export default Main;