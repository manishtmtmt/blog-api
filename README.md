# Blog API

This is a simple RESTful API for managing blog posts. It allows users to create, read, update, and delete blog posts.

## Features

- **Create Blog Post:** Users can create a new blog post by providing a title, content, and author.
- **Read Blog Post:** Users can view all existing blog posts or retrieve a specific blog post by its ID.
- **Delete Blog Post:** Users can delete a specific blog post by its ID.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- CORS
- dotenv

## Installation

1. Clone the repository:
```bash
git clone https://github.com/manishtmtmt/blog-api.git
```

2. Navigate to the project directory:
```bash
cd blog-api
```

3. Install dependencies using npm:
```bash
npm install
```

4. Set up environment variables:

    Create a `.env` file in the root directory and define the following variables:

```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/blog-api
```
    Make sure to replace MONGODB_URI with your MongoDB connection URI.

5. Start the server:
```bash
npm start
```

The server will start running at `http://localhost:3000`.

You can use tools like Insomnia or Postman to interact with the API endpoints.

## API Endpoints

- **POST /api/blog:** Create a new blog post.

    - Request Body: `{ "title": "string", "content": "string", "author": "string" }`

- **GET /api/blog:** Get all blog posts.
- **GET /api/blog/:id:** Get a specific blog post by its ID.
- **DELETE /api/blog/:id:** Delete a specific blog post by its ID.

## Contributors
[Manish Tiwari](https://linkedin.com/in/wdmanisht)
