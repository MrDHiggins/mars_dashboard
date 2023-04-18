import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, BrowserRouter, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/header/Header";


function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      fetch("http://localhost:5000/rovers/curiosity/photos")
        .then((res) => res.json())
        .then((data) => {
          setData(data.latest_photos[0]);
        });
    };
    fetchData();
  }, []);
  

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;