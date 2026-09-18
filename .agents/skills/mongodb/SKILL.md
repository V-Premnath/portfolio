---
name: mongodb
description: |
MongoDB development skill for designing schemas, writing CRUD queries,
aggregation pipelines, indexes, and integrating MongoDB with applications.
USE WHEN: working with MongoDB, Mongo, Mongoose, PyMongo, MongoDB queries,
collections, documents, BSON, aggregation pipelines, indexes, or MongoDB schema design.
DO NOT USE FOR: PostgreSQL, MySQL, Redis, Elasticsearch, or other databases.
allowed-tools: Read, Grep, Glob, Write, Edit
MongoDB Development
Use this skill when developing features that store or retrieve data from MongoDB.
Core Principles
Prefer clear, predictable document schemas.
Design documents around application access patterns.
Avoid unnecessary normalization when embedding provides simpler access.
Avoid unbounded array growth.
Create indexes based on actual query patterns.
Use projections when only specific fields are required.
Validate data at the application/database boundary where appropriate.
Never hardcode credentials or connection strings containing secrets.
---
Document Operations
Insert
```javascript
db.users.insertOne({
  name: "John",
  email: "john@example.com",
  createdAt: new Date()
});
```
Multiple documents:
```javascript
db.users.insertMany([
  { name: "John", active: true },
  { name: "Jane", active: true }
]);
```
Read
```javascript
db.users.find({
  active: true
});
```
Single document:
```javascript
db.users.findOne({
  _id: ObjectId("...")
});
```
With projection:
```javascript
db.users.find(
  { active: true },
  { name: 1, email: 1 }
);
```
Sorting and limiting:
```javascript
db.users.find({ active: true })
  .sort({ createdAt: -1 })
  .limit(20);
```
Update
```javascript
db.users.updateOne(
  { _id: ObjectId("...") },
  {
    $set: {
      name: "Jane"
    }
  }
);
```
Increment:
```javascript
db.products.updateOne(
  { _id: ObjectId("...") },
  {
    $inc: {
      stock: -1
    }
  }
);
```
Upsert:
```javascript
db.users.updateOne(
  { email: "user@example.com" },
  {
    $set: {
      name: "John"
    }
  },
  {
    upsert: true
  }
);
```
Delete
```javascript
db.users.deleteOne({
  _id: ObjectId("...")
});
```
Multiple:
```javascript
db.users.deleteMany({
  active: false
});
```
---
Query Operators
Comparison
```javascript
{ age: { $gt: 18 } }
{ age: { $gte: 18, $lte: 65 } }
{ status: { $in: ["active", "pending"] } }
{ status: { $nin: ["deleted"] } }
```
Logical
```javascript
{
  $and: [
    { age: { $gt: 18 } },
    { active: true }
  ]
}
```
```javascript
{
  $or: [
    { role: "admin" },
    { role: "moderator" }
  ]
}
```
Arrays
```javascript
{
  tags: {
    $all: ["python", "backend"]
  }
}
```
```javascript
{
  tags: "python"
}
```
Array element access:
```javascript
{
  "scores.0": {
    $gt: 90
  }
}
```
---
Aggregation
Use aggregation pipelines for filtering, grouping, transforming, joining, and calculating data.
Example:
```javascript
db.orders.aggregate([
  {
    $match: {
      status: "completed"
    }
  },
  {
    $group: {
      _id: "$userId",
      totalSpent: {
        $sum: "$amount"
      },
      orderCount: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalSpent: -1
    }
  },
  {
    $limit: 10
  }
]);
```
Common stages:
```text
$match
$project
$set
$unset
$group
$sort
$limit
$skip
$unwind
$lookup
$count
$facet
```
Prefer `$match` early in the pipeline when possible to reduce the number of documents processed.
---
Indexes
Create indexes based on query patterns.
```javascript
db.users.createIndex({
  email: 1
});
```
Unique index:
```javascript
db.users.createIndex(
  { email: 1 },
  { unique: true }
);
```
Compound index:
```javascript
db.orders.createIndex({
  userId: 1,
  createdAt: -1
});
```
Text index:
```javascript
db.products.createIndex({
  name: "text"
});
```
TTL index:
```javascript
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
);
```
Before adding an index, consider:
Which queries use it?
What is the selectivity?
Does the sort benefit from it?
What is the write overhead?
Is a compound index more appropriate?
Check query performance:
```javascript
db.orders
  .find({ userId: "123" })
  .explain("executionStats");
```
Look for unnecessary collection scans (`COLLSCAN`) and excessive documents examined.
---
Schema Design
Choose between embedded and referenced documents based on access patterns.
Embed when
Data is usually accessed together.
The embedded data has a bounded size.
The child data belongs strongly to the parent.
Example:
```javascript
{
  _id: ObjectId("..."),
  name: "John",
  addresses: [
    {
      city: "Hyderabad",
      type: "home"
    }
  ]
}
```
Reference when
The related data is large.
The relationship is many-to-many.
The child data grows without a practical bound.
The child data is frequently accessed independently.
Example:
```javascript
{
  _id: ObjectId("..."),
  userId: ObjectId("..."),
  productId: ObjectId("...")
}
```
Avoid unbounded arrays and excessively large documents.
---
MongoDB Application Integration
When integrating MongoDB into an application:
Configure the connection through environment variables.
Keep credentials outside source code.
Configure connection pooling appropriately.
Create indexes during application/database setup.
Keep database operations inside an appropriate repository/data-access layer.
Validate incoming data before persistence.
Handle connection and query errors explicitly.
Example environment configuration:
```env
MONGODB_URI=mongodb://localhost:27017/mydb
```
Do not commit credentials such as:
```env
MONGODB_URI=mongodb://username:password@host:27017/mydb
```
to source control.
---
Python
For Python applications, PyMongo or an appropriate MongoDB ODM may be used.
Typical structure:
```text
app/
├── models/
├── repositories/
├── services/
└── routes/
```
Keep MongoDB-specific query logic in the repository/data-access layer when the project architecture supports it.
Example:
```python
from pymongo import MongoClient

client = MongoClient(mongodb_uri)
db = client["mydb"]

users = db["users"]

user = users.find_one({
    "email": email
})
```
---
Node.js
For Node.js applications, use the official MongoDB driver or the project's chosen ODM.
Example:
```javascript
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

await client.connect();

const db = client.db("mydb");

const users = db.collection("users");

const user = await users.findOne({
  email
});
```
---
Transactions
Use MongoDB transactions when multiple operations must succeed or fail together.
Do not introduce transactions automatically.
First determine whether the operation can be safely modeled as a single atomic document update.
Use transactions when the operation genuinely spans multiple documents or collections and requires atomicity.
---
Performance Guidelines
Prefer:
```javascript
find({
  userId: userId
})
```
with an appropriate index over repeatedly scanning an entire collection.
Avoid:
Missing indexes on frequently queried fields.
Returning entire large documents unnecessarily.
Unbounded arrays.
Excessive `$lookup`.
Excessive aggregation stages when simpler queries are sufficient.
Loading thousands of documents into application memory unnecessarily.
Creating indexes without considering write overhead.
Use pagination for large result sets.
---
Security
Never hardcode database credentials.
Store secrets in environment variables or the project's secret-management system.
Use least-privilege database users.
Do not expose MongoDB directly to the public internet unless the deployment architecture explicitly requires it.
Validate and sanitize application inputs.
Avoid constructing queries from untrusted input without validation.
Use TLS for production deployments where required by the deployment environment.
---
Debugging
When MongoDB operations fail, check:
MongoDB connection string.
MongoDB server availability.
Authentication credentials.
Database and collection names.
Query structure.
Index availability.
Application/database driver configuration.
Error logs.
For slow queries:
```javascript
db.collection
  .find(query)
  .explain("executionStats");
```
Check whether the query is using the expected index.
---
Development Checklist
Before considering a MongoDB feature complete:
[ ] Schema/document structure is appropriate.
[ ] Queries match application access patterns.
[ ] Required indexes exist.
[ ] Large result sets are paginated.
[ ] Projections are used where appropriate.
[ ] Unbounded arrays are avoided.
[ ] Database credentials are not hardcoded.
[ ] Database operations are located in the appropriate application layer.
[ ] Error handling is implemented.
[ ] Query performance has been checked for important operations.
---
When NOT to Use This Skill
Do not use this skill when the task primarily concerns:
MySQL
PostgreSQL
Redis
Elasticsearch
Neo4j
Other non-MongoDB databases
Use the appropriate database skill instead.