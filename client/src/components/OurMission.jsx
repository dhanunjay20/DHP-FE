import React from "react";
import smileImg from "../assets/smile.jpg";

const OurMission = () => {
  const textSectionStyle = {
    backgroundColor: "#0d3b66", // thick blue background
    color: "white",
    padding: "50px 20px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    marginBottom: "20px",
    lineHeight: "1.6",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const buttonStyle = {
    backgroundColor: "#1f7a1f",
    color: "white",
    border: "none",
    padding: "12px 25px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    marginTop: "0",
    borderRadius: "10px",
  };

  return (
    <section>
      {/* Text Block */}
      <div style={textSectionStyle}>
        <h2 style={headingStyle}>Our Mission</h2>
        <p style={paragraphStyle}>
          To provide world-class healthcare that gets recommended by physicians,
          referred by patients, and chosen by partners.
        </p>
        <button
          style={buttonStyle}
          onMouseOver={e => (e.target.style.backgroundColor = "#145214")}
          onMouseOut={e => (e.target.style.backgroundColor = "#1f7a1f")}
        >
          Discover Values@Koye
        </button>
      </div>

      {/* Image Below */}
      <div>
        <img src="/assets/smile.jpg" alt="Mission Illustration" />
      </div>
    </section>
  );
};

export default OurMission;