import { isMobile } from "constants/index";
import React from "react";

interface ITestimonialItemProps {
  name: string;
  position: string;
  image: string;
  message: string;
  // styleSettings: any
}

const TestimonialItem: React.FC<ITestimonialItemProps> = ({
  name,
  position,
  image,
  message,
}: // styleSettings,
ITestimonialItemProps) => {
  return (
    <div
      className="testimonial-item-container"
      // style={styleSettings}
    >
      <div className="testimonial-left-panel">
        <div className="testimonial-details testimonial-message">
          <text className="quoatation-marks">{'" '}</text>
          {message}
          <text className="quoatation-marks">{' "'}</text>
        </div>
        <div className="testimonial-details testimonial-name">
          {name.toUpperCase()}
        </div>
        <div className="testimonial-details testimonial-position">
          {position}
        </div>
      </div>
      <div className="testimonial-right-panel">
        <img
          className="testimonial-image"
          src={image}
          alt={`Profile picture of ${name}, ${position}`}
          style={{
            objectPosition:
              isMobile && name === "Juan Harmse" ? "left" : "unset",
          }}
        />
      </div>
    </div>
  );
};
/* style={{width: 200, height: 200}}*/
export default TestimonialItem;
