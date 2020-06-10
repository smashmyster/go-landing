/* eslint-disable react/jsx-key */
import React from 'react'
import ios from 'assets/images/ios.svg'
import android from 'assets/images/android.svg'
import farmerApp from 'assets/images/farmer-app.png'
import RightTriangle from 'components/Triangle';
import { isMobile, _GoToStore } from 'constants/index';

export default class FarmerApp extends React.Component {
  render () {
    const screenWidth = window.innerWidth
    return ([
      <div className="farmer-app-container app-container row">
        <div className="farmer-app-info app-info">
          <div className="farmer-app-info-content">
          <div className="app-header">Download the <span className="green">Khula!</span> Farmer App</div>
          <div className="app-description">The #1 agricultural solution as awarded at the MTN App of the Year Awards.</div>
          <div className="app-points">
            <ol>
              <li>List and sell your products <span className="green">Direct </span>to pre-approved buyers</li>
              <li>Buy over <span className="green">200+ </span> input products, from fertilizers to soil and water tests</li>
              <li>Get expert agronomical advice and spray programmes</li>
            </ol>
          </div>
          <div className="farmer-app-links app-links desktop">
            <img src={android} onClick={()=>_GoToStore("android","farmer")} className="android-btn" alt="android-app-store" />
            <img src={ios} onClick={()=>_GoToStore("ios","farmer")} className="ios-btn" alt="ios-app-store" />
          </div>
          </div>
        </div>
        <div className="farmer-app-example app-example">
          <div className="triangle app-example-child flipped">
            <RightTriangle scale={isMobile?screenWidth/200:2.5} />
          </div>
          <div className="app-img-container app-example-child">
            <img src={farmerApp} className="app-img" alt="farmer-app-img" />
          <div className="farmer-app-links app-links mobile">
            <img src={android} onClick={()=>_GoToStore("android","farmer")} className="android-btn" alt="android-app-store" />
            <img src={ios} onClick={()=>_GoToStore("ios","farmer")} className="ios-btn" alt="ios-app-store" />
          </div>
          </div>
        </div>
      </div>,
      <div style={{ clear: 'both' }}/>
    ]
    )
  }
}
