import React from 'react';
import { connect } from 'react-redux';
import { selectedName } from '../actions'


class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
        
    }

   handleSubmit = (e) => {
       e.preventDefault();
       this.props.selectedName(this.state.name)
       this.setState({ name: '' })
   }

    onChange = (e) => {
        this.setState({ name: e.target.value })
    }
  

    render(){
        console.log(this.props.selectedNames)
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChange} type="text" value={this.state.name}></input>
                <div>input comp</div>
            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return { selectedNames: state.selectedNames }
}



export default connect(mapStateToProps, { selectedName })(Input);