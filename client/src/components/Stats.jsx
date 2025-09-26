import React, { useEffect, useState } from "react";

// Update these paths to your actual image files
import employeesImg from "../assets/users-icon.svg";
import productsImg from "../assets/pills-icon.svg";
import doctorImg from "../assets/doctor-icon.svg";
import globeImg from "../assets/earth-globe-icon.svg";
import graphImg from "../assets/graph-icon.svg";

const stats = [
  {
    id: 1,
    icon: employeesImg,
    value: 1250,
    label: "Employees",
    suffix: "+",
  },
  {
    id: 2,
    icon: productsImg,
    value: 500,
    label: "Products",
    suffix: "+",
  },
  {
    id: 3,
    icon: doctorImg,
    value: 80000,
    label: "Empaneled HCPs",
    suffix: "+",
  },
  {
    id: 4,
    icon: globeImg,
    value: 5,
    label: "Countries Reached",
    suffix: "+",
  },
  {
    id: 5,
    icon: graphImg,
    value: 300,
    label: "Approx. Annual Rev.",
    suffix: " Crs",
  },
];

// Custom hook for counter animation
const useCountUp = (endValue, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(timer);
        setCount(endValue);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return count;
};

const Stats = () => {
  return (
    <section style={{ padding: "50px 20px", backgroundColor: "#f9fafb" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {stats.map((stat) => {
          const count = useCountUp(stat.value, 2000);
          return (
            <div
              key={stat.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1",
                minWidth: "150px",
              }}
            >
              {/* Icon Image */}
              <img
                src={stat.icon}
                alt={stat.label}
                style={{ width: "90px", height: "90px", marginBottom: "10px" }}
              />

              {/* Animated Value */}
              <h3
                style={{
                  fontSize: "45px",
                  fontWeight: "800",
                  color: "#0b198f",
                  margin: "10px 0",
                }}
              >
                {count}
                {stat.suffix}
              </h3>

              {/* Label */}
              <p style={{ fontSize: "20px", fontWeight: "500", color: "#000"}}>
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
