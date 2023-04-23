import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import About from "./pages/About";
import Header from "./components/header/Header";


function App() {
  const [data, setData] = useState(null);
  const [selectedRover, setSelectedRover] = useState('');
  console.log(selectedRover)
  useEffect(() => {
    const fetchData = async () => {
      if (selectedRover) {
        const response = await fetch(`http://localhost:5000/rovers/${selectedRover}/photos`);
        const data = await response.json();
        setData(data);
      }
    };
    fetchData();
  }, [selectedRover]);

  return (
    <BrowserRouter>
        <Header setSelectedRover={setSelectedRover} />
        <Routes>
        <Route path={`/${selectedRover}`} element={<About roverData={data} selectedRover={selectedRover} />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
