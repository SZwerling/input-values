import React from 'react';
import { connect } from 'react-redux';
import { clickedName } from '../actions';

class Comp1 extends React.Component{
 

     clickName = (name) => {
        this.props.clickedName(name)
     }
    
    render(){
        const names = this.props.names.map((name) => {
            return(
                <div key={name} onClick={() => this.clickName(name)}>{name}</div>
            )
        })
        return(
            <div>{names}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { names: state.selectedNames,
             oneName: state.clickedName    
            }
}


export default connect(mapStateToProps, { clickedName: clickedName })(Comp1);