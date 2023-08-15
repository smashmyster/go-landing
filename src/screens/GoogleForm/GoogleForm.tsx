import React, { useEffect } from "react";
import Header from "screens/MainSite/_components/Header/Header";

const GoogleForm = () => {
  useEffect(() => {}, []);
  return (
    <div className="App roboto" style={{ backgroundColor: "#f9fcf9" }}>
      <Header />
      <div className="google-form-container">
        <iframe
          className="iframe"
          src="https://docs.google.com/forms/d/e/1FAIpQLScdEJhhAxaS3ZGbhKzL3X19FGCXmdAS2SR4eyPlezVIFQT17A/viewform?usp=sf_link"
          title="Khula-IFPA Southern Africa Conference"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleForm;
