import React from 'react';
import Comp1 from './comp1';
import Input from './input';
import './App.css'


class App extends React.Component{
        constructor(props){
            super(props);
            this.state = { 
                names: [
                    {
                        id: 0,
                        name: 'John'
                    },
                    {
                        id: 1,
                        name: 'Sam'
                    }
                ],
                tempValue: ''
            }
        }

        onSubmit = (e) => {
            e.preventDefault();
            
        }

        onChange = (e) => {
            this.setState({ tempValue: e.target.value})
            console.log(this.state.tempValue)
        }
      
    
        
        
    render(){
    return(
        <div>
            <Comp1 names = {this.state.names}/>
            <Input value={this.state.names[0]} onChange={this.onChange} tempValue={this.state.tempValue} onSubmit={this.onSubmit}/>
        </div>
        )
    }
}

export default App;