// Connect to the TechShop database
use TechShop;

// Create collections with indexes
db.createCollection("Users");
db.Users.createIndex({ email: 1 }, { unique: true });
db.createCollection("Products");
db.createCollection("Transactions");

// Index to speed up queries on Users by name
db.Users.createIndex({ name: 1 });
