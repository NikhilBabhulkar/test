const express = require('express');
const app = express();

// Define a route to handle GET requests
app.get('/', (req, res) => {
    res.send('Hello, this is a simple GET request!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
