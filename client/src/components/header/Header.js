import React from 'react';
import RoverSelection from '../rover/RoverSelection';

function Header( {setSelectedRover }) {
  return (
    <div className='header__container text-center'>
      <div className='flex bg-green-500 m-1 justify-center'>
        <div className=' bg-green-500 m-1 '>
          <div class='flex'>
            <h1 class='text-4xl text-orange-600 '>Welcome Martian</h1>
          </div>
        </div>
      </div>
      <div className="rover__selection__container">
        <RoverSelection setSelectedRover={setSelectedRover} />
      </div>
    </div>
  )
}
export default Header