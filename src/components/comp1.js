import React from 'react';

class Comp1 extends React.Component{
    constructor(props){
        super(props);
    }

     
    
    render(){
        console.log(this.props.names)  //destructuring 'guy' from props
        const name = this.props.names.map((name) => {
            return(
                <div key={name.id} onClick={() => console.log('was clicked')}>
                    {name.id}
                    {name.name}
                </div>
            )
        })
        return(
            <div>{name}</div>
        )
    }
}


export default Comp1;