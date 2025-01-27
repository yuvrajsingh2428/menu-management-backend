# **Menu Management Backend**

## *Overview*

This project is a Node.js backend server for menu management. It allows users to manage categories, subcategories, and items in a menu. The system is designed with a hierarchical structure:

Category: A category can have multiple subcategories.

Subcategory: A subcategory belongs to a category and can have multiple items.

Items: Items belong to a category or subcategory.

## Features

### CREATE

Create Category:

Attributes: name, image, description, taxApplicable, tax, taxType

### Create Subcategory:

Attributes: name, image, description, taxApplicable, tax

A subcategory is linked to a category.

### Create Items:

Attributes: name, image, description, taxApplicable, tax, baseAmount, discount, totalAmount

Items can belong to a category or a subcategory.

## READ (GET)

Fetch all categories, subcategories, and items.

Fetch specific categories or subcategories by ID or name.

Fetch all subcategories under a category.

Fetch all items under a category or subcategory.

Search items by name.

### UPDATE

Edit attributes for categories, subcategories, and items.

### SEARCH

Search items by name using a flexible query.

### DELETE

Remove categories, subcategories, and items.

### Tech Stack

Node.js

Express.js

MongoDB: Chosen for its flexible document-based schema and scalability.

Mongoose: For object data modeling.


# **Setup and Installation**

## Clone the repository:
git clone https://github.com/yuvrajsingh2428/menu-management-backend.git
cd menu-management-backend

## Install dependencies:
npm install

## Set up environment variables:
1. Create a .env file in the root directory.
2. Add the following variables:
   MONGO_URI=<your_mongodb_connection_string>
   PORT=<your_desired_port>

## Start the server:
npm start

## Access the application:
Base URL: http://localhost:<PORT>

### Endpoints

#### Category

- **Create Category**  
  - **Method:** POST  
  - **Endpoint:** `/categories`  
  - **Request Body:**  
    ```json
    {
      "name": "<string>",
      "image": "<url>",
      "description": "<string>",
      "taxApplicable": "<boolean>",
      "tax": "<number>",
      "taxType": "<string>"
    }
    ```

- **Get All Categories**  
  - **Method:** GET  
  - **Endpoint:** `/categories`

- **Get Category by ID**  
  - **Method:** GET  
  - **Endpoint:** `/categories/:id`

- **Update Category**  
  - **Method:** PUT  
  - **Endpoint:** `/categories/:id`

- **Delete Category**  
  - **Method:** DELETE  
  - **Endpoint:** `/categories/:id`

---

#### Subcategory

- **Create Subcategory**  
  - **Method:** POST  
  - **Endpoint:** `/subcategories`  
  - **Request Body:**  
    ```json
    {
      "name": "<string>",
      "image": "<url>",
      "description": "<string>",
      "taxApplicable": "<boolean>",
      "tax": "<number>",
      "categoryId": "<string>"
    }
    ```

- **Get All Subcategories**  
  - **Method:** GET  
  - **Endpoint:** `/subcategories`

- **Get Subcategories by Category**  
  - **Method:** GET  
  - **Endpoint:** `/subcategories?categoryId=<id>`

---

#### Items

- **Create Item**  
  - **Method:** POST  
  - **Endpoint:** `/items`  
  - **Request Body:**  
    ```json
    {
      "name": "<string>",
      "image": "<url>",
      "description": "<string>",
      "taxApplicable": "<boolean>",
      "tax": "<number>",
      "baseAmount": "<number>",
      "discount": "<number>",
      "subCategoryId": "<string>",
      "categoryId": "<string>"
    }
    ```

- **Get All Items**  
  - **Method:** GET  
  - **Endpoint:** `/items`

- **Search Items by Name**  
  - **Method:** GET  
  - **Endpoint:** `/items/search?name=<item_name>`

- **Update Item**  
  - **Method:** PUT  
  - **Endpoint:** `/items/:id`

- **Delete Item**  
  - **Method:** DELETE  
  - **Endpoint:** `/items/:id`

---

## Questions

### Which database have you chosen and why?

I chose **MongoDB** for its:
- Flexibility in handling hierarchical data.
- Scalability to support growing datasets.
- Document-based structure that simplifies working with nested data.

---

### 3 Things Learned:
1. Building a hierarchical data structure in MongoDB.
2. Designing efficient APIs for CRUD operations.
3. Managing relationships between categories, subcategories, and items.

---

### Most Difficult Part:
- Managing relationships between categories, subcategories, and items effectively.

---

### What would you do differently with more time?
- Add role-based authentication for better security.
- Implement advanced search features with filters.
- Optimize database queries for handling large datasets more efficiently.

---

## Contributing
Feel free to submit issues or pull requests to improve the project.

---

## License
This project is licensed under the **MIT License**.

---

## Author

**Yuvraj Singh**
