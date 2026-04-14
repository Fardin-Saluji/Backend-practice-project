🚀 Data Integrity System (Node.js + MongoDB + Validation + Error Handling)

📌 Overview

This project is a Data Integrity System built using Node.js, Express, and MongoDB (Mongoose).

It ensures proper validation, prevents duplicate data, and provides structured error responses for a clean and production-ready backend API.

---

🎯 Features

- Input validation (name, email, age)
- Email must be unique
- Age must be 18+
- Prevent duplicate entries
- Centralized error handling middleware
- Clean JSON response format
- Scalable backend architecture

---

📊 API Response Structure

✅ Success Response
```
{
  "success": true,
  "data": {
    "name": "Rahul",
    "email": "rahul123@gmail.com",
    "age": 22,
    "_id": "6616d97b...",
    "createdAt": "2026-04-13T18:12:48.000Z"
  }
}
```
---

❌ Error Response
```
{
  "success": false,
  "error": {
    "message": "Age must be 18+",
    "statusCode": 400
  }
}
```
---

📁 Project Structure
```
data-integrity-system/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── middleware/
│   └── errorMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── utils/
│   └── ApiError.js
│
├── app.js
├── server.js
├── .env
├── package.json
```
---

⚙️ Installation
```
git clone <your-repo-link>
cd data-integrity-system
npm install
```
---

▶️ Run Project
```
npm run dev
```
---

🔗 API Endpoint

✅ Create User

POST /api/users
```
📥 Sample Request

{
  "name": "Rahul",
  "email": "rahul123@gmail.com",
  "age": 22
}
```
---

📮 Postman Collection

👉 Test API here:
https://fardinsaluji-2836416.postman.co/workspace/fardin-saluji's-Workspace~e97d20b3-8255-42ec-8afe-4e2fff9b6306/request/49870578-b4ef7dc3-9ccc-468e-a277-94ad9e796268?action=share&source=copy-link&creator=49870578

---

🧠 Validation Rules

- Name is required
- Email must be unique
- Age must be greater than or equal to 18
- All fields are required

---

⚠️ Error Handling Strategy

- Custom "ApiError" class used
- Centralized error middleware
- Returns consistent JSON response
- Prevents leaking internal DB errors

---

🔒 How Validation Layer Works

1. Request comes to route
2. Controller validates input
3. If invalid → throws error
4. Error middleware catches it
5. Sends structured response

---

🚫 Preventing DB Error Exposure

- Internal MongoDB errors are hidden
- Only clean messages are returned
- Example:
  - ❌ Raw error hidden
  - ✅ "Email already exists" shown

---

📚 Learning Outcomes

- Learned data validation techniques
- Understood Mongoose schema validation
- Implemented unique constraints
- Built centralized error handling
- Designed clean API response structure
- Learned production-level error formatting
- Improved backend architecture design

---

🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemon

---

👨‍💻 Author

Fardin Saluji

