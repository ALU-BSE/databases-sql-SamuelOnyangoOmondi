Database Schema Design
Our database will comprise three main collections: Users, Products, and Transactions. Here's a brief overview of their schemas:

Users

name: String
email: String, Unique
password: String
Products

name: String
description: String
price: Number
userId: ObjectId (Reference to Users)
Transactions

buyerId: ObjectId (Reference to Users)
productId: ObjectId (Reference to Products)
date: Date
quantity: Number
