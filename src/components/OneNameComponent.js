import React from 'react';
import { connect } from 'react-redux';
import { temp } from '../actions'
import { modifyName } from '../actions'

class OneName extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name: ''
      }
    }

    onChange = (e) => {
      this.setState({ name: e.target.value })
  }

  onSubmit = (e) => {
    e.prevenDefault();
    this.props.modifyName(this.state.name, this.props.theName)  
    this.setState({ name: '' })
  }

    render(){


            if(this.props.theName.length > 0){
              return  (
                <form onSubmit={this.onSubmit}>
                <input onChange={this.onChange} type="text" placeholder={this.props.theName}  value={this.state.name}></input>
                <div>change name</div>
            </form>
              )
            } else {
                return <div></div>
            }
    }
}

const mapStateToProps = (state) => {
   return { theName: state.clickedName,
            tempReducer: state.tempReducer 
          }
}



export default connect(mapStateToProps, { temp, modifyName })(OneName);