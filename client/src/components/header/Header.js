import React from 'react';
import RoverSelection from '../rover/RoverSelection';

function Header( {setSelectedRover }) {
  return (
    <div className='bg-red-500'>

      <div className='flex bg-green-500 m-1'>
        {/* Create Mars Logo */}
        {/* <div className='flex'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg' alt='Mars Logo' className='w-20 h-20' />
        </div> */}

        {/* Create welcome martian text in center of div*/}
        <div className='flex justify-center items-center w-full'>
          <h1 className='text-4xl text-white'>Welcome Martian</h1>
          <RoverSelection setSelectedRover={setSelectedRover} />
            </div>
      </div>

    </div>
  )
}
export default Header