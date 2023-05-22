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
    <div className="about__rover__container h-screen w-full pl-2 pr-2 pt-2 bg-gray-200">

      <div className="rover__info__header bg-slate-500">
        <p className="text-xl font-bold text-center text-white">Rover Type: {name}</p>
      </div>

      <div className="flex w-[100%] h-[30%] md:w-[100%] md:h-[50%] lg:w-[100%] lg:h-[60%] justify-center">
        <div className="h-[100%] w-[60%]">
          <div className="rover__image flex w-[100%] h-[100%] p-1">
            <div className={` bg-${roverName.toLowerCase()} w-[100%] h-[100%] bg-cover md:bg-contain lg:bg-cover bg-no-repeat md:bg-no-repeat block bg-center md:bg-center lg:bg-center`}/>
          </div>
        </div>

        <div className="rover__info min-h-full md:ml-1 lg:ml-1 items-center justify-between lg:text-2xl">

          <div className="rover__name">
            <p className="font-bold mr-1">Rover Name:</p>
            <p>{name}</p>
          </div>

          <div className="rover__landing__date ">
            <p className="font-bold mr-1">Landing Date: </p>
            <p>{landing_date}</p>
          </div>

          <div className="rover__launch__date ">
            <p className="font-bold mr-1">Launch Date: </p>
            <p>{launch_date}</p>
          </div>

          <div className="rover__status ">
            <p className="font-bold mr-1">Status: </p>
            <p>{status}</p>
          </div>

        </div>
      </div>
      


      <div className="rover__info__header bg-slate-500 mt-2">
        <p className="text-xl font-bold text-center text-white">Images Captured</p>
      </div>
      
      <div className="carousel__container md:flex md:justify-center lg:flex lg:justify-center mt-2 bg-gray-200">
        <div className="rover__carousel__container md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 justify-center">
          <div className="rover__carousel">
            <Carousel>
              {photos.map((photo) => (
                <div className="rover__carousel__img h-full" key={photo}>
                  <img
                    className="object-fill h-[100%] w-full"
                    src={photo}
                    alt={`Mars Rover img_src ID: ${photo}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
