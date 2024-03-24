// Find all products listed by a specific user
db.Products.find({ userId: ObjectId("specificUserIdHere") });

// Find the total amount spent by a specific user
db.Transactions.aggregate([
  { $lookup: { from: "Products", localField: "productId", foreignField: "_id", as: "productInfo" } },
  { $match: { buyerId: ObjectId("specificBuyerIdHere") } },
  { $unwind: "$productInfo" },
  { $group: { _id: null, totalAmount: { $sum: { $multiply: ["$quantity", "$productInfo.price"] } } } }
]);

// Find the top 5 most popular products
db.Transactions.aggregate([
  { $group: { _id: "$productId", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 5 },
  { $lookup: { from: "Products", localField: "_id", foreignField: "_id", as: "productInfo" } }
]);
