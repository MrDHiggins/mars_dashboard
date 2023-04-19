import React, { useState } from 'react';
import Immutable from 'immutable';
import {useNavigate} from "react-router-dom"

function RoverSelection({ setSelectedRover }) {
  const store = Immutable.Map({
    user: Immutable.Map({ name: 'Martian' }),
    apod: '',
    rovers: Immutable.List(['Curiosity', 'Opportunity', 'Spirit']),
    selectedRover: '',
  });
  
  const [rovers, setRover] = useState(store.get('rovers'));
  const navigate = useNavigate();
    
  const handleRoverSelection = (event, rovers) => {
    event.preventDefault();
    const selectedRover = event.target.value;
    setSelectedRover(selectedRover); // update selectedRover in the parent component
    const updatedRovers = rovers.set('selectedRover', selectedRover);
    setRover(updatedRovers);
    navigate(`/${selectedRover}`);
  };

  const roverButtons = rovers.map((rover) => {
    return (
      <button
        className="rounded hover:rounded border-2 border-green-500 hover:border-green-600 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 m border-b-4 border-black"
        key={rover}
        value={rover}
        onClick={(event) => handleRoverSelection(event, rovers)}
      >
        {rover}
      </button>
    );
  });

  return (
    <div className="rover__selection__menu">
      <div className="flex flex-col">
        <div>{roverButtons}</div>
      </div>
    </div>
  );
}

export default RoverSelection;
