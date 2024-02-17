// Import the required libraries
require('dotenv').config(); // Load environment variables from .env file
const express = require("express"); // Library for building web applications
const mongoose = require("mongoose"); // Library for MongoDB object modeling
const cors = require("cors"); // Middleware for enabling Cross-Origin Resource Sharing

const blogRouter = require("./router/blog"); // Importing router for handling blog-related routes

// Initialize express
const app = express(); // Creating an instance of the Express application

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGO_URI, { // Use environment variable for MongoDB URI
    // Connecting to the local MongoDB instance named "blog-api"
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB")) // Log a message if connection is successful
  .catch((err) => console.error("Could not connect to MongoDB", err)); // Log an error if connection fails

app.use(express.json()); // Middleware to parse JSON bodies of requests
app.use(cors()); // Middleware to enable Cross-Origin Resource Sharing

// Route for the root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!"); // Send a response of "Hello World!" for requests to the root endpoint
});

app.use("/api", blogRouter); // Mount the blogRouter middleware at the "/api" base path

const port = process.env.PORT || 3000; // Set the port for the server to listen on

app.listen(
  port,
  () => console.log(`Blog API is running on http://localhost:${port}...`) // Start the server and log the URL it's running on
);
