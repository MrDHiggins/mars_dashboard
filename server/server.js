require('dotenv').config();
const express = require('express');
// const bodyParser = require('body-parser')
// const fetch = require('node-fetch')
// const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;
app.use(cors());


// app.get('/rovers/curiosity/photos', async (req, res) => {
    app.get('/rovers/:name/photos', async (req, res) => {
    const { name } = req.params;
      try {
        const roverData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/latest_photos?api_key=qxci2ymt4PjY5bEupv0SVMt1nkb4LfzRJhKUU18g`)
          .then(res => res.json());
        res.send(roverData);
        // console.log(roverData)
      } catch (err) {
        console.log('error:', err);
      }
    });

    app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
    console.log(`NASA API KEY: ${process.env.API_KEY}`)
})