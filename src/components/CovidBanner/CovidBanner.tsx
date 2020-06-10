import React from 'react'
import covid from 'assets/images/covid-sa-logo-2.png'

export default class CovidBanner extends React.Component{
    render() {
        return (
        <div className="covid-container">
            <a href="https://sacoronavirus.co.za/" 
               style={{display: "flex",alignItems: "center",outline:0, textDecoration:"none",}}
               target="_blank"
               rel="noopener noreferrer"
            >
                <img style={{width:"40%",margin:"0.5rem 2rem"}} src={covid} alt="covid banner"/> 
                <div className="navbar-btn" onClick={()=>null} 
                    style={{display: "flex",
                        flexDirection: "row",
                        width: "8rem",
                        alignItems: "center",
                        color: "#387C3F"
                    }}
                >
                    <div className="btn-txt" style={{margin: "auto",fontSize: "0.8rem"}}>More information<span className="item-icon icon-arrow-right"></span></div>
                </div>
            </a>
        </div>
        )
    }
}