import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Immutable = require('immutable'); // import immutable module

function About({ data, selectedRover }) {
  
  
  const newData = Immutable.Map({...data}).toJS()
  // setRover(data)
  // let latestData = newData.merge(newData).toJS();
  // latestData = latestData.toJS();


  // if (data) {
    // imgSrcArray = data.latest_photos.map((item) => ({
    //   name: item.name,
    //   landing_date: item.landing_date,
    //   launch_date: item.launch_date,
    //   status: item.status,
    //   img_src: item.img_src
    // }));
    //console.log(data);
  // }

  // const imgSrcArray = data.latest_photos.map((item) => item.img_src);
  // console.log(imgSrcArray);
 
  return (
    <div>
      <h2>{selectedRover}</h2>
      {console.log(newData.latest_photos)}

      {/* <div>
      <p>Rover Name: {newData.latest_photos[0].rover.name}</p>
<p>Landing Date: {newData.latest_photos[0].rover.landing_date}</p>
<p>Launch Date: {newData.latest_photos[0].rover.launch_date}</p>
<p>Status: {newData.latest_photos[0].rover.status}</p>
      </div> */}

      {/* {img_src && (
        <Carousel>
          {Array.isArray(latest_photos) ? (
            latest_photos.map((d) => (
              <div key={d.id}>
                <img
                  src={d.img_src}
                  alt={`Mars Rover img_src ID: ${d.id}`}
                />
                <p className="legend">{d.earth_date}</p>
              </div>
            ))
          ) : (
            <div key={data.id}>
              <img src={data.img_src} alt={`Mars Rover img_src ID: ${data.id}`} />
              <p className="legend">{data.earth_date}</p>
            </div>
          )}
        </Carousel>
      )} */}
    </div>
  );
}

export default About;
