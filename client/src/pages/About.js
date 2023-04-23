import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function About({ data, selectedRover }) {
  let imgSrcArray = [];
  if (data) {
    // imgSrcArray = data.latest_photos.map((item) => ({
    //   name: item.name,
    //   landing_date: item.landing_date,
    //   launch_date: item.launch_date,
    //   status: item.status,
    //   img_src: item.img_src
    // }));
    console.log(data);
  }

  console.log(imgSrcArray);
  // const imgSrcArray = data.latest_photos.map((item) => item.img_src);
  // console.log(imgSrcArray);
  // const { rover, img_src, latest_photos } = data;
  return (
    <div>
      <h2>{selectedRover}</h2>

      {/* <div>
      <p>Rover Name: {data?.name}</p>
<p>Landing Date: {data?.landing_date}</p>
<p>Launch Date: {data?.launch_date}</p>
<p>Status: {data?.status}</p>
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
