import React from "react";

function About({ data, selectedRover }) {
  return (
    <div>
      <h2>{selectedRover}</h2>
      {data && (
        <div>
          <p>Landing Date: {data.rover.landing_date}</p>
          <p>Launch Date: {data.rover.launch_date}</p>
          <p>Status: {data.rover.status}</p>
        </div>
      )}
    </div>
  );
}

export default About;
