import React from 'react';
import RoverSelection from '../rover/RoverSelection';

function Header( {setSelectedRover }) {
  return (
    <div className='header__container text-center flex bg-slate-500'>
      {/* Home Button */}
      <div className="home_button_container flex">
        <button className="home_button bg-slate-600 hover:bg-green-700 text-white font-bold py-2 px-4">
          Home
        </button>
      </div>
      {/* Salutation div */}
      <div className='flex m-1 justify-center'>
        <div className='m-1 '>
          <div class='flex'>
            <h1 class='text-3xl'>Welcome Martian</h1>
          </div>
        </div>
      </div>
      {/* Get Rover Buttons */}
      <div className="rover__selection__container">
        <RoverSelection setSelectedRover={setSelectedRover} />
      </div>
    </div>
  )
}
export default Header