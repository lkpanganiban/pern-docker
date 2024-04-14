// server.js
const express = require("express");
const app = express();
const port = 3001;


// Define a route handler for GET requests to the root URL
app.get("/", (req, res) => {
    res.send("Hello from the API!");
});

app.listen(port, () => {
    console.log(`Success! Your application is running on port ${port}.`);
});
