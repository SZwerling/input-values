import React from 'react';
import { connect } from 'react-redux';
import { selectedName } from '../actions'


class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temp: ''
        }
    }

   handleSubmit = (e) => {
       e.preventDefault();
    console.log(e);
   }

    onChange = (e) => {
        this.setState({ temp: e.target.value})
    }
  

    render(){
        console.log(selectedName)
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChange} type="text" value={this.state.temp}></input>
                <div>input comp</div>
            </form>
        )
    }
}

const mapDispatchToProps = {
    selectedName: (name) => (selectedName(name))
};

const mapDispatchToProps = {
    temp: (temp) => 
}

export default connect(null, mapDispatchToProps)(Input);