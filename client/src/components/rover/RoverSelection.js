import React, { useState } from 'react';
import Immutable from 'immutable';

function RoverSelection({ setSelectedRover }) {
  const store = Immutable.Map({
    user: Immutable.Map({ name: 'Martian' }),
    apod: '',
    rovers: Immutable.List(['Curiosity', 'Opportunity', 'Spirit']),
    selectedRover: '',
  });
  
  const [rovers, setRover] = useState(store.get('rovers'));
    
  const handleRoverSelection = (event, rovers) => {
    event.preventDefault();
    const selectedRover = event.target.value;
    setSelectedRover(selectedRover); // update selectedRover in the parent component
    const updatedRovers = rovers.set('selectedRover', selectedRover);
    setRover(updatedRovers);
    console.log(selectedRover);
  };

  const roverButtons = rovers.map((rover) => {
    return (
      <button
        className="flex flex-col h-4 w-4 bg-red-100"
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
        <div className="h-80% w-80% bg-orange-400">{roverButtons}</div>
      </div>
    </div>
  );
}

export default RoverSelection;
