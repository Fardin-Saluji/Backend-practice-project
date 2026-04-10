🚀 Activity Logging System (Node.js + MongoDB)

📌 Overview

This project is a backend Activity Logging System built using Node.js, Express, and MongoDB (Mongoose).

It logs every API request automatically using middleware without affecting the main API performance.

---

🎯 Features

- Logs every API request
- Stores logs in MongoDB
- Uses Express middleware (automatic logging)
- Non-blocking async logging (no performance impact)
- Handles DB failure using fallback (file logging)
- Clean and scalable architecture

---

📊 Logging Data Structure

Each API request stores the following data:
```
{
  "userId": "anonymous",
  "route": "/api/user/profile",
  "method": "GET",
  "status": 200,
  "timestamp": "2026-04-10T17:05:22.063Z"
}
```
---

📁 Project Structure
```
activity-logger/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── middleware/
│   │   └── loggerMiddleware.js
│   │
│   ├── models/
│   │   └── Log.js
│   │
│   ├── routes/
│   │   └── userRoutes.js
│   │
│   ├── services/
│   │   └── logService.js
│   │
│   ├── utils/
│   │   └── fallbackLogger.js
│   │
│   └── app.js
│
├── server.js
├── .env
├── package.json
└── fallback.log
```
---

⚙️ Installation
```
git clone <your-repo-link>
cd activity-logger
npm install
```
---

▶️ Run Project
```
npm run dev
```
---

🔗 API Endpoints

✅ GET Profile
```
GET /api/user/profile
```
✅ POST Login
```
POST /api/user/login
```
---

📮 Postman Collection

👉 Test APIs here:
https://fardinsaluji-2836416.postman.co/workspace/fardin-saluji's-Workspace~e97d20b3-8255-42ec-8afe-4e2fff9b6306/request/49870578-e2088b81-b919-4697-8d18-9a3da874b346?action=share&source=copy-link&creator=49870578

---

🧠 How It Works

1. User sends API request
2. Middleware intercepts request
3. Response completes
4. Log data is created
5. Saved asynchronously to MongoDB

---

⚡ Logging Strategy

- Centralized logging using middleware
- Captures:
  - userId
  - route
  - method
  - status
  - timestamp

---

🔄 Async Handling

- Logging is done using "setImmediate()"
- Ensures:
  - Non-blocking execution
  - Faster API response

---

🚀 Performance Impact

- Minimal to zero impact
- Logging runs in background
- Main API response is not delayed

---

❌ Error Handling & Fallback

If MongoDB fails:

- Logs are stored in a file ("fallback.log")

Benefits:

- No data loss
- System reliability

---

📚 Learning Outcomes

- Learned middleware-based architecture
- Understood async programming in Node.js
- Implemented MongoDB with Mongoose
- Built real-world logging system
- Learned error handling & fallback mechanism
- Improved backend system design skills
- Learned performance optimization

---

🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemon

---

🙌 Connect with Me

🔗 LinkedIn: https://www.linkedin.com/in/fardinsaluji/

---

👨‍💻 Author

Fardin Saluji

---
