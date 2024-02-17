const BlogPost = require("../models/blog"); // Importing the BlogPost model for interacting with the database

// Controller function for creating a new blog post
module.exports.createBlog = async (req, res) => {
  const { title, content, author } = req.body; // Extracting title, content, and author from the request body

  let blogPost = new BlogPost({ title, content, author }); // Creating a new instance of BlogPost model with the provided data

  blogPost = await blogPost.save(); // Saving the newly created blog post to the database

  return res.status(201).send(blogPost); // Sending a response with the created blog post and status code 201 (Created)
};

// Controller function for fetching all blog posts
module.exports.getBlogs = async (req, res) => {
  const blogPosts = await BlogPost.find(); // Fetching all blog posts from the database

  return res.status(200).send(blogPosts); // Sending a response with the fetched blog posts and status code 200 (OK)
};

// Controller function for fetching a specific blog post by ID
module.exports.getBlog = async (req, res) => {
  const { id: postId } = req.params; // Extracting the post ID from the request parameters

  const blogPost = await BlogPost.findById(postId); // Finding the blog post with the specified ID

  if (!blogPost) {
    // If no blog post is found with the specified ID
    return res.status(404).send(`No blog post found with the id of ${postId}`); // Sending a 404 (Not Found) response
  }

  return res.status(200).send(blogPost); // Sending a response with the found blog post and status code 200 (OK)
};

// Controller function for deleting a specific blog post by ID
module.exports.deleteBlog = async (req, res) => {
  const { id: postId } = req.params; // Extracting the post ID from the request parameters

  const result = await BlogPost.deleteOne({ _id: postId }); // Deleting the blog post with the specified ID

  if (!result.deletedCount) {
    // If no blog post is deleted (result.deletedCount is 0)
    return res.status(404).send(`No blog post found with the id of ${postId}`); // Sending a 404 (Not Found) response
  }

  return res.status(200).send(result); // Sending a response with the deletion result and status code 200 (OK)
};
