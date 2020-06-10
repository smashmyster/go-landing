import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Card from './Components/Card';

export default class Farmer extends React.Component {
  render() {
    return (
      <div className="farmer-container">
        <ScrollAnimation animateOnce={true} delay={2} duration={3} animateIn="slideInUp">
          <div className="farmer-header">We have launched our market place for farmers</div>
          <div className="farmer-description">Buy over 2000+ products from our app</div>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} delay={2} duration={3} animateIn="slideInUp">
          <div className="market-categories">
            <div className="row">
              <div className="quadrant">
                <Card title="Fungicide"/>
                <Card title="Herbicide"/>
              </div>
              <div className="quadrant">
                <Card title="Soil"/>
                <Card title="Plant growth regulator" className="plant-growth"/>
              </div>
            </div>
            <div className="row">
              <div className="quadrant">
                <Card title="Seed treatment" className="seed-treatment"/>
                <Card title="Packhouse"/>
              </div>
              <div className="quadrant">
                <Card title="Animal health" className="animal-health"/>
                <Card title="Other"/>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}
