import React, { useState } from 'react';
import Immutable from 'immutable';
import { useNavigate } from 'react-router-dom';

function RoverSelection({ setSelectedRover, btnStacked = false }) {
  const store = Immutable.Map({
    user: Immutable.Map({ name: 'Martian' }),
    apod: '',
    rovers: Immutable.List(['Curiosity', 'Opportunity', 'Spirit']),
    selectedRover: '',
  });

  const [rovers, setRover] = useState(store.get('rovers'));
  const [selectedRover, setSelected] = useState(store.get('selectedRover'));
  const navigate = useNavigate();
  const stackRoverButtons = btnStacked ? 'flex flex-col' : 'flex flex-row';

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
    const selectedRoverBtn = selectedRover === rover ? 'bg-slate-400 text-w font-bold text-gray-700 border-t-2 border-gray-100' : 'bg-slate-500 text-gray-100';  
    return (
      <button
        className={`rounded hover:rounded border-gray-400 hover:border-t-2 hover:border-b-2 font hover:border-white  ${selectedRoverBtn} hover:font-bold `}
        key={rover}
        value={rover}
        onClick={(event) => handleRoverSelection(event, rovers)}
      >
        {rover}
      </button>
    );
  });

  return (
    <div className="rover__selection__menu flex justify-center text-center">
      <div>
        <div className={`${stackRoverButtons} gap-1 lg:gap-5`}>{roverButtons}</div>
      </div>
    </div>
  );
}

export default RoverSelection;
