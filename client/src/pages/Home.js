import React from 'react';
import MarsFacts from '../components/home/MarsFacts';

function Home() {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-nasa-ofTheDay bg-cover'>
      <div className="w-1/2 h-1/2 md:w-1/3 md:h-2/3 bg-gray-400 bg-opacity-40 shadow-lg backdrop-filter backdrop-blur-sm border border-opacity-20 border-white rounded-lg">
        {/* Black hole week container */}
        <div className="h-1/4 flex justify-center items-center">
          <MarsFacts />
        </div>
      </div>
    </div>
  )
}
export default Home
// bg-opacity-40 shadow-lg backdrop-filter backdrop-blur-sm border border-opacity-20 border-white rounded-lg