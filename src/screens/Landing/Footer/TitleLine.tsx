import React from 'react'

export default class TitleLine extends React.Component{
    render() {
        return(
            <div className="something" style={{height: '2px', display:'flex', flexDirection:'row'}}>
                <div className="green" style={{backgroundColor: '#346e3d', height:'100%',flex:'1'}}></div>
               <div className="grey" style={{backgroundColor: 'grey', height:'100%',width:'20%'}}></div>
            </div>
        )
    }
}