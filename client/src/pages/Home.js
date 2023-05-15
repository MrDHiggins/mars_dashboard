import React from 'react';
import MarsFacts from '../components/home/MarsFacts';

function Home() {
  return (
    <div className='flex min-w-screen h-screen'>
        <div className="home__container h-full w-full bg-nasa-ofTheDay p-2">
            <div className="bg-red h-full w-full bg-gray-400 bg-opacity-40 shadow-lg backdrop-filter backdrop-blur-sm border border-opacity-20 border-white rounded-lg">
                {/* Black hole week container */}
                <div className="black__hole__container">
                    <MarsFacts />
                </div>
            </div>
        </div>
    </div>
  )
}
export default Home