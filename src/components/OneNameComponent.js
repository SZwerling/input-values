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
      this.props.temp(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.modifyName(this.props.tempReducer, this.props.theName);
    this.props.temp('')
   
}

    render(){

      console.log(this.props)
            if(this.props.theName.length > 0){
              return  (
                <form onSubmit={this.handleSubmit}>
                  <input onChange={this.onChange} type="text" placeholder={this.props.theName}  value={this.props.tempReducer}></input>
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