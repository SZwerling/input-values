import React from 'react';
import { connect } from 'react-redux';

class OneName extends React.Component{



    render(){

            if(this.props.theName.length > 0){
              return  <div style={{ fontSize: "10rem"}}>{this.props.theName}</div>
            } else {
                return <div></div>
            }
    }
}

const mapStateToProps = (state) => {
   return { theName: state.clickedName }
}

export default connect(mapStateToProps)(OneName);