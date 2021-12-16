import React from 'react';


class Input extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <form onSubmit={this.props.onSubmit}>
                <input onChange={this.props.onChange} type="text" value={this.props.tempValue}></input>
                <div>input comp</div>
            </form>
        )
    }
}

export default Input;