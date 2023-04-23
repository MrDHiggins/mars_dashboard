import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// const Immutable = require('immutable'); // import immutable module

function About({ roverData, selectedRover }) {
  // const { name, landing_date, launch_date, status } = roverData?.latest_photos[0]?.rover;
  const rover = roverData?.latest_photos?.[0]?.rover;
  const name = rover?.name;
  const landing_date = rover?.landing_date;
  const launch_date = rover?.launch_date;
  const status = rover?.status;
  // data = Immutable.Map({...data}).toJS();
  // data = JSON.stringify(data)
  // console.log(data)
  // setRover(data)
  // let latestData = newData.merge(newData).toJS();
  // latestData = latestData.toJS();
  const [photos, setPhotos] = useState([]);

  const roverName = selectedRover
  useEffect(() => {
    fetch(`http://localhost:5000/rovers/${roverName}/photos`)
      .then((response) => response.json())
      .then((data) => setPhotos(data.latest_photos.map((photo) => photo.img_src)))
      .catch((error) => console.log(error));
  }, [roverName]);


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
      {/* {console.log(`My test: ${data}`)} */}
      
      <div>
        <p>Rover Name: {name}</p>
        <p>Landing Date: {landing_date}</p>
        <p>Launch Date: {launch_date}</p>
        <p>Status: {status}</p>
      </div>

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
      )} */}<div class='flex w-1/4 h-1/4'>
            <Carousel class='flex w-1/4 h-1/4'>
              {photos.map((photo, index) => (
                <div key={index}>
                  <img src={photo} alt={`Mars ${index}`} />
                </div>
                ))}

            </Carousel>
            </div>
    </div>
  );
}

export default About;
