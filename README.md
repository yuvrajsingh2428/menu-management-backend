#Menu Management Backend

Overview

This project is a Node.js backend server for menu management. It allows users to manage categories, subcategories, and items in a menu. The system is designed with a hierarchical structure:

Category: A category can have multiple subcategories.

Subcategory: A subcategory belongs to a category and can have multiple items.

Items: Items belong to a category or subcategory.

Features

CREATE

Create Category:

Attributes: name, image, description, taxApplicable, tax, taxType

Create Subcategory:

Attributes: name, image, description, taxApplicable, tax

A subcategory is linked to a category.

Create Items:

Attributes: name, image, description, taxApplicable, tax, baseAmount, discount, totalAmount

Items can belong to a category or a subcategory.

READ (GET)

Fetch all categories, subcategories, and items.

Fetch specific categories or subcategories by ID or name.

Fetch all subcategories under a category.

Fetch all items under a category or subcategory.

Search items by name.

UPDATE

Edit attributes for categories, subcategories, and items.

SEARCH

Search items by name using a flexible query.

DELETE

Remove categories, subcategories, and items.

Tech Stack

Node.js

Express.js

MongoDB: Chosen for its flexible document-based schema and scalability.

Mongoose: For object data modeling.
