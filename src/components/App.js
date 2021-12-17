import React from 'react';
import Comp1 from './comp1';
import Input from './input';
import './App.css'


class App extends React.Component{
        constructor(props){
            super(props);
            this.state = { }
        }

      
    
        
        
    render(){
    return(
        <div>
            <Comp1/> 
            <Input />
        </div>
        )
    }
}

export default App;