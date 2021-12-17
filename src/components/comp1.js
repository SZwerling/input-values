import React from 'react';
import { connect } from 'react-redux';

class Comp1 extends React.Component{
    constructor(props){
        super(props);
    }

     
    
    render(){
        console.log(this.props)  
        
        return(
            <div>names</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { names: state.selectedNames }
}


export default connect(mapStateToProps)(Comp1);