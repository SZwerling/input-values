import React from 'react';
import { connect } from 'react-redux';

class Comp1 extends React.Component{
    constructor(props){
        super(props);
    }

     
    
    render(){
        const names = this.props.names.map((name) => {
            return(
                <div key={name} onClick={() => console.log(`You clicked ${name}`)}>{name}</div>
            )
        })
        return(
            <div>{names}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { names: state.selectedNames }
}


export default connect(mapStateToProps)(Comp1);