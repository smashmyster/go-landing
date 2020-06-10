import React from 'react'
import Loader from 'components/Loader/Loader'

type ButtonProps={
    children?:any,
    title?: string,
    loading?: boolean,
    disabled?: boolean,
    color?: string,
    onClick?:()=>any
}

export default class Button extends React.Component<ButtonProps>{
    render() {
        const {title, loading, disabled,onClick} = this.props
        return (
        <div className={`btn ${disabled? "greybg" : "greenbg"}`} onClick={()=>(onClick && !disabled)?onClick():null}>
            {
                loading?
                <Loader white/>:
                <div className="btn-title">{title}</div>
            }
         </div>
        )
    }
}