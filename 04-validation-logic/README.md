🚀 User API - Validation Logic (PUT /users/:id)

This project demonstrates a REST API with validation logic built using Node.js, Express.js, and MongoDB.

It focuses on handling update operations with proper validation and error handling, just like real-world backend systems.

---

🔗 Postman API Collection

👉 https://fardinsaluji-2836416.postman.co/workspace/fardin-saluji's-Workspace~e97d20b3-8255-42ec-8afe-4e2fff9b6306/request/49870578-b4ef7dc3-9ccc-468e-a277-94ad9e796268?action=share&source=copy-link&creator=49870578

---

📌 Features

✔️ Update user using "PUT /users/:id"
✔️ Only name field can be updated
✔️ Validation: Name cannot be empty
✔️ Proper HTTP status codes
✔️ Error handling (400, 500)
✔️ Returns updated document

---

⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

📂 Folder Structure
```
validation-logic/
│── src/
│   ├── controllers/
│   │   └── user.controller.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── user.routes.js
│   ├── app.js
│   └── server.js
│
│── .env
│── package.json
│── package-lock.json
```
---

🔥 API Endpoint

👉 Update User
```
PUT /users/:id
```
📥 Request Body
```
{
  "name": "fardin"
}
```
---

✅ Success Response (200 OK)
```
{
  "_id": "697276782bbdd08a0ba3c143",
  "name": "fardin",
  "createdAt": "2026-01-22T19:11:52.143Z"
}
```
---

❌ Validation Error (400 Bad Request)
```
{
  "message": "Name cannot be empty"
}
```
---

❌ Server Error (500 Internal Server Error)
```
{
  "message": "Server error"
}
```
---

🧠 Learning Outcomes

- Learned how to build REST APIs using Express
- Understood PUT request handling
- Implemented input validation
- Learned proper HTTP status codes
- Improved error handling
- Worked with MongoDB & Mongoose
- Understood backend folder structure (MVC)

---

⚡ Key Concepts

👉 Validation Logic
👉 Error Handling
👉 API Design
👉 Backend Architecture

---

▶️ How to Run
```
npm install
npm run dev
```
Server runs on:
```
http://localhost:3000
```
---

🙌 Connect with Me

🔗 LinkedIn: https://www.linkedin.com/in/fardinsaluji/

---

⭐ Conclusion

This project helped me understand how to build robust backend APIs with validation and error handling, which is very important for real-world applications.
