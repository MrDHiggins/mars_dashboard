import React from 'react';
import RoverSelection from '../rover/RoverSelection';

function Header( {setSelectedRover }) {
  return (
    <div>

      <div className=' bg-green-500 m-1'>
        {/* Create Mars Logo */}
        {/* <div className='flex'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg' alt='Mars Logo' className='w-20 h-20' />
        </div> */}

        {/* Create welcome martian text in center of div*/}
        <div className='flex'>
          <h1 className='text-4xl text-orange-600'>Welcome Martian</h1>
        </div>
      </div>
      <RoverSelection setSelectedRover={setSelectedRover} />
      
    </div>
  )
}
export default Header