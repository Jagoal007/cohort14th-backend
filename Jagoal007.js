// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route that responds with "Hello, World!" when accessed
app.get('/get', (req, res) => {
  res.send('Hello, World!');
});
// GET request 
app.get('/get', (req, res) => {
    res.send('Mr Ojukotimi is Billionaire!');
})

app.use(express.json());
// post request 
app.post('/post', (req, res) => {
    const {username} = req.body;
    res.send(`hello ${username}`);
});

// put request 
app.put('/put', (req, res) => {
    res.send('Mr Ojukotimi is Billionaire!');
});
// del request 
app.delete('/delete', (req, res) => {
    res.send('Mr Ojukotimi is Billionaire!');
});

// patch request 
app.patch('/money', (req, res) => {
    res.send('Mr Ojukotimi is Billionaire!');
});

app.patch('/money', (req, res) => {
    res.send('Mr Ojukotimi is Billionaire!');
});

// Set the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
