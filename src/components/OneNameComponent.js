import React from 'react';
import { connect } from 'react-redux';
import { temp } from '../actions'
import { modifyName } from '../actions'

class OneName extends React.Component{

  onChange = (e) => {
    this.props.temp(e.target.value)
  }

  onSubmit = (e) => {
    e.prevenDefault();
    this.props.modifyName(this.props.temp);  
  }

    render(){
        console.log(this.props.tempReducer)

            if(this.props.theName.length > 0){
              return  (
                <form onSubmit={this.onSubmit}>
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