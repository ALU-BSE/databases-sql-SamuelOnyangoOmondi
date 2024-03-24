# TechShop NoSQL Database with MongoDB

This repository contains the MongoDB database implementation for TechShop, an online marketplace for tech products. The implementation includes the database schema design, collections creation, sample data insertion, and advanced queries for users, products, and transactions management.

## Database Schema Design

The TechShop database comprises three main collections:

- **Users:** Stores information about the users including their name, email, and password.
- **Products:** Contains details of the products such as name, description, price, and the ID of the user who listed the product.
- **Transactions:** Records each transaction, including the buyer's ID, product's ID, transaction date, and quantity purchased.

## Implementation

### Collections Creation

The database is structured into three collections: Users, Products, and Transactions. 

- See `setup.js` for commands used to create these collections and their indexes.

### Sample Data Insertion

Sample data for testing the database functionality is provided. 

- Refer to `sampleData.js` for the insertion commands.

### Advanced Queries

Advanced queries to interact with the database include finding products by a user, calculating total amount spent by a user, and identifying the top 5 most popular products.

- Queries are detailed in `queries.js`.

## Setup and Running

To set up the database and insert the sample data:

1. Ensure MongoDB is installed and running on your system.
2. Run the scripts provided in the order mentioned:
    - `mongo < setup.js`
    - `mongo < sampleData.js`
3. Execute the queries in `queries.js` to test the database.

## Contribution

Feel free to fork this repository and submit pull requests to contribute to improvements. For any queries or suggestions, open an issue in the GitHub repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
