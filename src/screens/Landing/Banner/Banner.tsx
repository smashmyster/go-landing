import React from 'react'
import android from 'assets/images/android.svg'
import ios from 'assets/images/ios.svg'
import bannerImg from 'assets/images/banner-img.jpg'
import { _GoToStore } from 'constants/index';

export default class Banner extends React.Component {

    render() {
        return(
            <div className="banner-container">
                <img className="banner-img" src={bannerImg} alt="banner-img"/>
                <div className="banner-txt">
                    <p className="lrg-txt">Buy directly from farmers.</p>
                    <p className="sml-txt">Over 3000+ farmers on Khula!</p>
                    <p className="sml-txt">100% of our suppliers are vetted.</p>
                    <p className="sml-txt">Get the app today.</p>
                </div>
                <div className="app-store-btns">
                    <p><img src={android} onClick={()=>_GoToStore("android")} className="android-btn" alt="android-app-store" /></p>
                    <img src={ios} onClick={()=>_GoToStore("ios")} className="ios-btn" alt="ios-app-store" />
                </div>
            </div>
        )
    }
}