import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, BrowserRouter, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/header/Header";


function App() {
  const [data, setData] = useState('');
  const [selectedRover, setSelectedRover] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (selectedRover) { // Add a conditional to only fetch data when `selectedRover` has a value
        const response = await fetch(`http://localhost:5000/rovers/${selectedRover}/photos`);
        const data = await response.json();
        setData(data.latest_photos[0]);
      }
    };
    fetchData();
  }, [selectedRover]); // Include `selectedRover` in the dependency array

  return (
    <BrowserRouter>
        <Header setSelectedRover={setSelectedRover} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;