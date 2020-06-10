import React from 'react'

export default class SecondaryNavbar extends React.Component {

    render() {
        return(
            <div className="navbar-container border">
                <div className="navbar-links secondary">
                    <div className="fruits-link padding-md">Fruits</div>
                    <div className="vegetables-link padding-md">Vegetables</div>
                    <div className="herbs-link padding-md">Herbs</div>
                    <div className="nuts-link padding-md">Nuts</div>
                    <div className="for-farmers-link padding-md">For Farmers</div>
                </div>
            </div>
        )
    }
}