import React from 'react';
import RoverSelection from '../rover/RoverSelection';
import { 
  RocketLaunch,
  Home,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Header( {setSelectedRover }) {
  return (
    <div className='header__container flex bg-slate-500 w-full h-11 min-w-max sticky top-0'>
      
      {/* Home button */}
      <div className='flex w-full'>
        <div className='flex bg-slate-600 md:px-2 sm:px-0 md:w-[10%] w-[25%] lg:w-[5%] items-center justify-center hover:bg-slate-700'>
          <Link to="/" className="home_button flex flex-shrink text-white font-bold">
            <Home/>
          </Link>
        </div>

        {/* Salution div */}
        <div className='flex items-center text-white text-xs'>
          <p className='flex pl-2 md:px-2 lg:px-2 w-auto leading-none lg:text-xl md:text-base text-sm'>Hello Martian</p>
          
          <span className="material-icons-outlined px-1 flex text-xs">
            <RocketLaunch/>
          </span>
        </div>
      </div>
      {/* End home button */}

      <div className='flex items-center text-center justify-end w-full md:px-2 lg:px-6 lg:text-xl text-sm px-2'>
        <RoverSelection btnStacked={false} setSelectedRover={setSelectedRover} />
      </div>

      

    </div>
  )
}
export default Header