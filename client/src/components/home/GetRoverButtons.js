import React from 'react';
import RoverSelection from '../rover/RoverSelection';

function GetRoverButtons({ setSelectedRover}) {
  return (
    <div className='flex text-center w-full h-full justify-center'>
      <div className='flex w-full items-center justify-center'>
        <RoverSelection 
          btnStacked={true} 
          setSelectedRover={setSelectedRover} 
          />
      </div>
    </div>
  )
} 
export default GetRoverButtons