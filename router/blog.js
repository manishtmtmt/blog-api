const { Router } = require("express"); // Importing the 'Router' class from Express for creating modular, mountable route handlers
const {
  createBlog,
  getBlogs,
  getBlog,
  deleteBlog,
} = require("../controllers/blog"); // Importing controller functions for handling different blog operations

const router = Router(); // Creating a new router instance

// Define routes and associate them with corresponding controller functions
router.post("/blog", createBlog); // Route for creating a new blog post
router.get("/blog", getBlogs); // Route for fetching all blog posts
router.get("/blog/:id", getBlog); // Route for fetching a specific blog post by ID
router.delete("/blog/:id", deleteBlog); // Route for deleting a specific blog post by ID

module.exports = router; // Exporting the router for use in other parts of the application
