import React from "react";

interface IToggleButtonsProps {
  showLeftButton: boolean;
  showRightButton: boolean;
  leftButtonFunc: () => void;
  rightButtonFunc: () => void;
}

const PulsatingToggleButtons: React.FC<IToggleButtonsProps> = ({
  showLeftButton,
  showRightButton,
  leftButtonFunc,
  rightButtonFunc,
}: IToggleButtonsProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        className="carousel-button-container"
        style={{
          marginRight: "30px",
          transform: showLeftButton ? "scale(1)" : "scale(.8)",
          opacity: showLeftButton ? 1 : 0.7,
        }}
        onClick={() => {
          leftButtonFunc();
        }}
      >
        <div className="toggle-icon-container">
          <span className="icon fas-chevron-left"></span>
        </div>
        {showLeftButton && [
          <div key={0} className="pulse-animation pulse-one" />,
          // <div key={1} className="pulse-animation pulse-two" />,
        ]}
      </div>
      <div
        className="carousel-button-container"
        style={{
          transform: showRightButton ? "scale(1)" : "scale(.8)",
          opacity: showRightButton ? 1 : 0.7,
        }}
        onClick={() => {
          rightButtonFunc();
        }}
      >
        <div className="toggle-icon-container">
          <span className="icon fas-chevron-right"></span>
        </div>
        {showRightButton && [
          <div key={0} className="pulse-animation pulse-one" />,
          // <div key={1} className="pulse-animation pulse-two" />,
        ]}
      </div>
    </div>
  );
};

export default PulsatingToggleButtons;
