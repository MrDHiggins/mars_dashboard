import React from 'react';
import RoverSelection from '../rover/RoverSelection';

function GetRoverButtons({ setSelectedRover}) {
  return (
    <div className='text-center w-full h-full justify-center'>
      <p className='justify-center mt-0 font-bold text-white'>Select A Rover:</p>
      <div className='flex w-full h-2/3 items-center justify-center'>
        
        <RoverSelection 
          btnStacked={true} 
          setSelectedRover={setSelectedRover} 
          />
      </div>
    </div>
  )
} 
export default GetRoverButtons