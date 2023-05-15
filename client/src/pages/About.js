import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function About({ roverData, selectedRover }) {
  const rover = roverData?.latest_photos?.[0]?.rover;
  const name = rover?.name;
  const landing_date = rover?.landing_date;
  const launch_date = rover?.launch_date;
  const status = rover?.status;

  const [photos, setPhotos] = useState([]);

  const roverName = selectedRover;
  useEffect(() => {
    fetch(`http://localhost:5000/rovers/${roverName}/photos`)
      .then((response) => response.json())
      .then((data) =>
        setPhotos(data.latest_photos.map((photo) => photo.img_src))
      )
      .catch((error) => console.log(error));
  }, [roverName]);

  return (
    <div className="about__rover__container flex bg-blue-300 min-h-screen min-h-screen">

      {/* start rover__info */}
      <div className="rover__info w-1/3 p-3">

        <div className="rover__name">
          <h1 className="font-bold mr-1">Rover Name:</h1>
          <p>{name}</p>
        </div>

        <div className="rover__landing__date ">
          <h1 className="font-bold mr-1">Landing Date: </h1>
          <p>{landing_date}</p>
        </div>

        <div className="rover__launch__date ">
          <h1 className="font-bold mr-1">Launch Date: </h1>
          <p>{launch_date}</p>
        </div>

        <div className="rover__status ">
          <h1 className="font-bold mr-1">Status: </h1>
          <p>{status}</p>
        </div>
      </div>
      {/* End rover__info */}

      {/* start rover__carousel__container */}
      <div className="rover__carousel__container w-2/3 bg-green-600 p-2">

        <div className="rover__carousel">
          <Carousel>
            {photos.map((photo) => (
              <div className="rover__carousel__img h-full" key={photo}>
                <img
                  className="object-fill h-[100%]"
                  src={photo}
                  alt={`Mars Rover img_src ID: ${photo}`}
                />
                </div>
            ))}
            
          </Carousel>
        </div>

      </div>
      {/* End rover__carousel__container */}
    </div>
    // End about__rover__container
  );
}

export default About;
