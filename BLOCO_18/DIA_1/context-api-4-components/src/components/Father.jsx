import React from 'react';
import Daughter from './Daughter'

class Father extends React.Component{
    render(){
        return(
            <div>
                <h2>
                    Pai
                </h2>
                <Daughter />
            </div>
        )
    }
}

export default Father;