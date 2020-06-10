import React from 'react'

export default class Navbar extends React.Component {

    render() {
        return(
            <div className="navbar-container">
                <div className="navbar-links">
                    <div className="services-link margin-left">Our Services
                        <div className="services-dropdown">
                            <p className="dropdown-item">Logistics Services</p>
                            <p className="dropdown-item">Supplier Vetting</p>
                        </div>

                    </div>
                    <div className="farmers-link margin-left">Farmers</div>
                    <div className="funders-link margin-left">Funders</div>
                </div>
                <div className="navbar-btn">
                    <div className="btn-txt">Get the app</div>
                </div>
            </div>
        )
    }
}