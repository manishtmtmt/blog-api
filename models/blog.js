const { model, Schema } = require("mongoose"); // Importing the 'model' and 'Schema' classes from Mongoose for defining MongoDB schemas and models

// Define the schema for a blog post
const blogSchema = new Schema({
  title: String, // Field for the title of the blog post
  content: String, // Field for the content of the blog post
  author: String, // Field for the author of the blog post
  timestamp: { type: Date, default: Date.now }, // Field for the timestamp of when the blog post was created, defaults to the current date/time
});

// Create a Mongoose model based on the schema, named "BlogPost"
const BlogPost = model("BlogPost", blogSchema);

// Export the BlogPost model to be used elsewhere in the application
module.exports = BlogPost;
