import React from "react";

interface ITestimonialItemProps {
  name: string;
  position: string;
  image: string;
  message: string;
}

const TestimonialItem: React.FC<ITestimonialItemProps> = ({
  name,
  position,
  image,
  message,
}: ITestimonialItemProps) => {
  return <div className="testimonial-item-container"></div>;
};

export default TestimonialItem;
