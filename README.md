# 📚 Book Management API

A RESTful API for managing books and user authentication, built using **Node.js**, **Express.js**, **Sequelize**, and **Joi**.

## Setup and Run the Project Locally **

### Prerequisites
- Node.js (v14+)
- MySQL Database

### Step 1: Clone the Repository

git clone https://github.com/smThilshan/book_management_api.gitrepository
cd book-management-api

## Step 2: Install Dependencies

npm install express sequelize mysql2 jsonwebtoken bcrypt dotenv joi express-validator
npm install --save-dev nodemon jest supertest

## Step 3: Configure Environment Variables

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_db_password
DB_NAME=book_management
JWT_SECRET=your_jwt_secret

## Step 4: Setup Database

Make sure your MySQL server is running. Sync the database schema

- npm run migrate

## Step 5: Start the Server

npm start

if you are gonna work on dev, you can start as 'npm run dev'

## API Endpoints

## Auth APIs 
### Register User
Endpoint: POST /auth/register
Request Body:
{
  "username": "testuser",
  "password": "password123",
  "role": "user"
}

Response:
{
  "message": "User registered successfully"
}


### Login User
Endpoint: POST /auth/login
Request Body:
{
  "username": "testuser",
  "password": "password123"
}

Response:
{
  "message": "Login successful",
  "token": "<jwt_token>"
}

### Register Admin
Endpoint: POST /auth/register
Request Body:
{
  "username": "testadmin",
  "password": "password123",
  "role": "admin"
}

Response:
{
  "message": "Admin registered successfully"
}


### Login Admin
Endpoint: POST /auth/login
Request Body:
{
  "username": "testadmin",
  "password": "password123"
}

Response:
{
  "message": "Login successful",
  "token": "<jwt_token>"
}

## Book APIs 

### Get All Books (With Pagination)
Endpoint: GET /books
Endpoint: GET /books/id
Endpoint: GET /books?page=1
Endpoint: GET /books?page=1&limit=10
Endpoint: GET /books?page=2&limit=10
Headers:
Authorization: Bearer <jwt_token>

Response:
{
  "totalBooks": 50,
  "totalPages": 5,
  "currentPage": 1,
  "books": [ ... ]  
}

### Add a New Book
Endpoint: POST /books
Headers:
Authorization: Bearer <jwt_token>

Request Body:
{
  "title": "Book Title",
  "author": "Author Name",
  "publishedYear": 2024
}

Response:
{
  "message": "Book added successfully",
  "book": { ... }
}

### UPDATE a New Book
Endpoint: PUT /books/id
Headers:
Authorization: Bearer <jwt_token>

Request Body:
{
  "title": "Book Title Update",
  "author": "Author Name",
  "publishedYear": 2024
}

Response:
{
 "title": "Book Title Update",
  "author": "Author Name",
  "publishedYear": 2024
}


### DELETE a New Book
Endpoint: DELETE /books/id
Headers:
Authorization: Bearer <jwt_token>
Request Body:  {}

Response:
{
    "message": "Book deleted successfully",
}

## Project Structure

/config         - Database configuration
/controllers    - API controllers
/middlewares    - Middleware functions
/models         - Database models
/routes         - API routes
/postman        - Postman collection file
.env            - Environment variables
README.md       - Project documentation
server.js       - Main file





