import React, { useState } from 'react';
import Immutable from 'immutable';
import { useNavigate } from 'react-router-dom';

function RoverSelection({ setSelectedRover }) {
  const store = Immutable.Map({
    user: Immutable.Map({ name: 'Martian' }),
    apod: '',
    rovers: Immutable.List(['Curiosity', 'Opportunity', 'Spirit']),
    selectedRover: '',
  });

  const [rovers, setRover] = useState(store.get('rovers'));
  const [selectedRover, setSelected] = useState(store.get('selectedRover'));
  const navigate = useNavigate();

  const handleRoverSelection = (event, rovers) => {
    event.preventDefault();
    const selectedRover = event.target.value;
    setSelectedRover(selectedRover); // update selectedRover in the parent component
    setSelected(selectedRover);
    const updatedRovers = rovers.set('selectedRover', selectedRover);
    setRover(updatedRovers);
    navigate(`/${selectedRover}`);
  };

  const roverButtons = rovers.map((rover) => {
    const selectedRoverBtn = selectedRover === rover ? 'bg-violet-200 text-red-500' : 'bg-gray-500 text-gray-100';
    return (
      <button
        className={`rounded hover:rounded border-2 border-green-500 hover:border-green-600 ${selectedRoverBtn} font-bold py-2 px-4 m-1`}
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
