import React from 'react';
import GetRoverButtons from '../components/home/GetRoverButtons';


function Home( {setSelectedRover }) {
  return (
    <div className="flex justify-center items-center h-screen bg-nasa-ofTheDay bg-cover">
      <div className="w-1/2 h-1/4 md:w-1/3 md:h-2/3 bg-gray-400 bg-opacity-40 shadow-lg backdrop-filter backdrop-blur-sm border border-opacity-20 border-white rounded-lg">
        <div className="h-full justify-center items-center">
          <GetRoverButtons setSelectedRover={setSelectedRover} />
          </div>
      </div>
    </div>
  );
}

export default Home;
