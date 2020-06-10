import React from 'react'

type LoaderProps = {
    size?: number,
    secondary?:boolean
    white?:boolean
}
export default class Loader extends React.Component<LoaderProps>{
    render() {
        const { size,secondary,white } = this.props
        return (
            <div className="spinner-container">
                <svg className={`spinner ${secondary?"charcoal":""} ${white?"white":""}`} style={{ ...size ? { height: size, width: size } : {} }} viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="1.5"></circle>
                </svg>
            </div>
        );
    }
}