## Car Store
The Car Store is a web application built to manage the inventory and orders of cars in a store. It provides an API that allows users to perform CRUD operations on car data, create orders, and manage car availability. This project uses Node.js, Express, MongoDB, and Mongoose.

Features
CRUD Operations for Cars: Create, Read, Update, and Delete car data, including fields like brand, model, price, quantity, and availability.
Order Management: Users can place orders for cars, with features like email validation, stock quantity checks, and total price calculation.
Stock Management: The system automatically updates car quantities when an order is placed, ensuring accurate inventory tracking.
Email Validation: Ensures that customer emails are valid before creating an order.
Error Handling: Comprehensive error handling for scenarios like invalid input, insufficient stock, and missing data.
Data Validation: Mongoose-based validation for all fields to ensure data integrity.
Technology Stack
Backend:
Node.js
Express.js
MongoDB with Mongoose ORM
Validation:
Mongoose Schema Validation
Email and Quantity Validation
Error Handling:
Custom error handling for common issues like missing data or insufficient stock
API Endpoints:
Car CRUD: /api/cars
Order CRUD: /api/orders
Getting Started
Prerequisites
Before running the project locally, make sure you have the following installed:

Node.js: Install Node.js
MongoDB: Install MongoDB or use MongoDB Atlas for a cloud-based database.
Setup Instructions
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/car-store.git
cd car-store
Install dependencies:
Make sure you're in the project directory and run the following command to install all necessary dependencies:

bash
Copy code
npm install
Setup Environment Variables:
Create a .env file in the root directory of the project with the following content (replace with your own MongoDB URI):

bash
Copy code
MONGO_URI=mongodb://localhost:27017/carstore
PORT=5000
Start the application:
Run the application using the following command:

bash
Copy code
npm start
The application will be available at http://localhost:5000.

API Documentation
Car Endpoints
GET /api/cars: Get all cars in the inventory.
POST /api/cars: Add a new car to the inventory.
PUT /api/cars/:id: Update a car in the inventory.
DELETE /api/cars/:id: Delete a car from the inventory.
Order Endpoints
GET /api/orders: Get all orders.
POST /api/orders: Create a new order (ensure email, car ID, and quantity are provided).
Error Handling
400 Bad Request: When the input data is missing or invalid.
404 Not Found: When the requested car or order does not exist.
500 Internal Server Error: For server-side issues.
Contribution
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
