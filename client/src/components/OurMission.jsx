import React from "react";
import smileImage from "../assets/smile.jpg"; 

const OurMission = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "330px", // max height
    margin: "0 150px", // left-right gap
    overflow: "hidden",
  };

  const leftStyle = {
    flex: "0 0 45%", // 40% width
    backgroundColor: "#343579",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "45px 0 48px 0",
    textAlign: "center",
  };

  const rightStyle = {
    flex: "0 0 55%", // 60% width
    height: "100%",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    margin:"30px 100px 0 0",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.2",
  };

  const buttonStyle = {
    backgroundColor: "#008577",
    color: "#ffffff",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
  };

  return (
    <div style={containerStyle}>
      {/* Left Side */}
      <div style={leftStyle}>
        <h2 style={headingStyle}>Our Mission</h2>
        <p style={paragraphStyle}>
          To provide world-class healthcare that is affordable by patients,
          prescribed by physicians, and chosen by partners.
        </p>
        <button style={buttonStyle}>Discover Values @ Koye</button>
      </div>

      {/* Right Side */}
      <div style={rightStyle}>
        <img src={smileImage} alt="Our Mission" style={imageStyle} />
      </div>
    </div>
  );
};

export default OurMission;