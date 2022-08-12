import React, { useEffect } from "react";
import Header from "screens/_components/Header/Header";

const GoogleForm = () => {
  useEffect(() => {}, []);
  return (
    <div className="App roboto" style={{ backgroundColor: "#f9fcf9" }}>
      <Header />
      <div className="google-form-container" style={{ ...styles.container }}>
        <iframe
          style={{ ...styles.iframe }}
          src="https://docs.google.com/forms/d/e/1FAIpQLScdEJhhAxaS3ZGbhKzL3X19FGCXmdAS2SR4eyPlezVIFQT17A/viewform?usp=sf_link"
          title="Khula-IFPA Southern Africa Conference"
        ></iframe>
      </div>
    </div>
  );
};

const styles: any = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  iframe: {
    borderWidth: "unset",
    borderStyle: "unset",
    height: "100vh",
    width: "50%",
  },
};

export default GoogleForm;
