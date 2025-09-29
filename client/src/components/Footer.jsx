import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1e1e1e", color: "#fff", padding: "40px 20px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", // <-- center vertically
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* Left Side - Facebook Embed */}
        <div style={{ flex: "1", textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "15px 78px 50px 40px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              display: "inline-block",
            }}
          >
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKoyePharmaceuticals%2F&tabs=timeline&width=300&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="300"
              height="400"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="facebook-page"
              ></iframe>
          </div>
        </div>

        {/* Corporate Info */}
        <div style={{ flex: "1", minWidth: "250px", textAlign: "left", marginLeft:"100px"}}>
          <h3 style={{ marginBottom: "15px", fontSize: "18px" }}>Corporate Info</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2", fontSize: "18px" }}>
            <li>
              <a href="#about" style={{ color: "#fff", textDecoration: "none"}}>About Us</a>
            </li>
            <li>
              <a href="#privacy" style={{ color: "#fff", textDecoration: "none" }}>Privacy Policy</a>
            </li>
            <li>
              <a href="#terms" style={{ color: "#fff", textDecoration: "none" }}>Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div style={{ flex: "1", minWidth: "250px", textAlign: "left" }}>
          <p style={{ margin: "15px 0", fontSize: "18px" }}>
            📞 <a href="tel:+91226868200" style={{ color: "#fff", textDecoration: "none" }}>+91 22 6868 200</a>
          </p>
          <p style={{ margin: "15px 0", fontSize: "18px" }}>
            📧 <a href="mailto:info@koye.co" style={{ color: "#fff", textDecoration: "none" }}>info@koye.co</a>
          </p>
          <p style={{ margin: "15px 0", fontSize: "18px" }}>
            🏢 Koye Pharmaceuticals Pvt. Ltd. <br />
            A 201/202, Crystal Plaza, Hiranandani Business Park,
            <br />
            Phoenix Market City Annex, LBS Marg, Kurla (West),
            <br />
            Mumbai - 400070
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ marginTop: "30px", fontSize: "17px", color: "#fff" }}>
        © Copyright Koye Pharmaceuticals Pvt. Ltd. 2022
      </div>
    </footer>
  );
};

export default Footer;
