// Insert sample Users
db.Users.insertMany([
  { name: "John Doe", email: "johndoe@example.com", password: "password123" },
  { name: "Jane Doe", email: "janedoe@example.com", password: "password456" }
]);

// Insert sample Products (replace userIdHere with actual User IDs)
db.Products.insertMany([
  { name: "Laptop Pro", description: "A high-end laptop for professionals.", price: 1200, userId: ObjectId("userIdHere") },
  { name: "Smartphone X", description: "A cutting-edge smartphone.", price: 800, userId: ObjectId("userIdHere") }
]);

// Insert sample Transactions (replace buyerIdHere and productIdHere with actual IDs)
db.Transactions.insertMany([
  { buyerId: ObjectId("buyerIdHere"), productId: ObjectId("productIdHere"), date: new Date("2023-03-24"), quantity: 1 }
]);
