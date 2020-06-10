import React from 'react'
import ios from 'assets/images/ios.svg'
import android from 'assets/images/android.svg'
import clientApp from 'assets/images/client-app.png'
import RightTriangle from 'components/Triangle';
import { isMobile, _GoToStore } from 'constants/index';

export default class ClientApp extends React.Component {

    render() {
        const screenWidth = window.innerWidth
        return (
            <div className="client-app-container app-container row">
                <div className="client-app-example app-example">
                    <div className="triangle app-example-child">
                        <RightTriangle scale={isMobile ? screenWidth / 200 : 2.5} />
                    </div>
                    <div className="app-img-container app-example-child">
                        <img src={clientApp} className="app-img" alt="client-app-img" />
                        <div className="client-app-links app-links mobile">
                            <img src={android} onClick={() => _GoToStore("android", "buyer")} className="android-btn" alt="android-app-store" />
                            <img src={ios} onClick={() => _GoToStore("ios", "buyer")} className="ios-btn" alt="ios-app-store" />
                        </div>
                    </div>
                </div>
                <div className="client-app-info app-info">
                    <div className="app-header">Download the <span className="green">Khula!</span> Buyer App</div>
                    <div className="app-description">Buy great food, anywhere. We serve bulk buyers, packhouses, processors and distributers.</div>
                    <div className="app-points">
                        <ol>
                            <li>Buy from over <span className="green">3000+ </span>vetted farmers</li>
                            <li>Filter your global gap, local gap or other certification requirements</li>
                            <li>Send <span className="green">bids</span> to our network, or let us help you manage your contract buying</li>
                        </ol>
                    </div>
                    <div className="client-app-links app-links desktop">
                        <img src={android} onClick={() => _GoToStore("android", "buyer")} className="android-btn" alt="android-app-store" />
                        <img src={ios} onClick={() => _GoToStore("ios", "buyer")} className="ios-btn" alt="ios-app-store" />
                    </div>
                </div>
            </div>
        )
    }
}