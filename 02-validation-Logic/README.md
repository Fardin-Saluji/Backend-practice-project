📌 Backend Validation Logic API (Node.js + MySQL)

🚀 Description

This project is a REST API built using Node.js, Express, and MySQL.
It includes validation logic, query filtering, and JWT-based authentication for protected routes.

---

🛠️ Tech Stack

- Node.js
- Express.js
- MySQL
- JWT (JSON Web Token)
- Postman

---

📂 Folder Structure

```
validation-Logic/
│
├── config/
│   └── db.js
├── routes/
│   └── users.js
├── app.js
├── server.js
├── package.json
```
---

🔗 API Endpoints

✅ Get All Users

GET /users

✅ Filter by Minimum Age

GET /users?minAge=18

✅ Limit Records

GET /users?limit=2

✅ Combined Query

GET /users?minAge=18&limit=3

---

🔐 Authentication (JWT)

Token ko header me bhejna hota hai:

Authorization: Bearer <your_token>

---

🧪 Postman Testing

👉 Postman Collection Link:
https://fardinsaluji-2836416.postman.co/workspace/fardin-saluji's-Workspace~e97d20b3-8255-42ec-8afe-4e2fff9b6306/request/49870578-6d990040-e156-4770-9072-72328eda0f17?action=share&creator=49870578&ctx=documentation

---

⚙️ Setup Instructions

1. Clone repository
   git clone <your-repo-link>

2. Install dependencies
   npm install

3. Start server
   npm start

4. Server runs on
   http://localhost:3000

---

🎯 Features

- REST API using Express
- MySQL database connection
- Query filtering (minAge, limit)
- JWT Authentication
- Clean folder structure

---

📚 Learning Outcomes

- Learned how to build REST APIs using Node.js
- Understood MySQL database integration
- Implemented query parameters (minAge, limit)
- Learned JWT authentication concept
- Tested APIs using Postman
- Debugged real-world errors (deployment & token issues)
- Learned backend project structure

---

🔗 Connect with me

👉 LinkedIn: https://www.linkedin.com/in/your-linkedin-username

---

💡 Author

Fardin Saluji
