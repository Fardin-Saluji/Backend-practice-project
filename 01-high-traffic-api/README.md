🚀 High Traffic API Redesign (Node.js + MySQL)

📌 Description

This project focuses on improving the performance of a slow API ("GET /users") when handling large datasets.
The backend is redesigned using pagination, filtering, and response size optimization.

---

🛠️ Tech Stack

- Node.js
- Express.js
- MySQL
- Nodemon
- Postman

---

📂 Folder Structure
```
high-traffic-api/
│
├── config/
│   └── db.js
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── utils/
│   └── seedData.js
├── server.js
├── package.json
```
---

🔗 API Endpoints

✅ Get Users (Basic)

GET /users

---

✅ Pagination

GET /users?page=1&limit=10

---

✅ Filter by Age

GET /users?age=30

---

✅ Filter by Name

GET /users?name=User2

---

✅ Select Fields (Reduce Response Size)

GET /users?fields=name,email

---

⚡ API Improvements

🔹 Pagination

- Large data ko small chunks me divide karta hai
- Server load reduce hota hai

🔹 Filtering

- Specific data fetch hota hai (age, name)
- Unnecessary data avoid hota hai

🔹 Response Size Limiting

- Sirf required fields return karta hai
- Network fast ho jata hai

---

🔄 API Contract Changes

Old API| New API
/users| /users?page=1&limit=10
No filter| /users?age=30
Full data| /users?fields=name,email

---

⚙️ Backend Optimization

- SQL queries optimized using WHERE clause
- LIMIT & OFFSET used for pagination
- Selected fields reduce data transfer
- Efficient query building using query params

---

🚀 Why Performance Improved

- Reduced database load
- Faster response time
- Less data transfer
- Better scalability for high traffic

---

🧪 Postman Testing

👉 Postman Collection Link:
https://fardinsaluji-2836416.postman.co/workspace/fardin-saluji's-Workspace~e97d20b3-8255-42ec-8afe-4e2fff9b6306/request/49870578-e2088b81-b919-4697-8d18-9a3da874b346?action=share&source=copy-link&creator=49870578

---

⚙️ Setup Instructions

1. Clone repository
   git clone <your-repo-link>

2. Install dependencies
   npm install

3. Start server
   npm run dev

4. Server runs on
   http://localhost:5000

---

🎯 Features

- Pagination (page & limit)
- Query filtering (age, name)
- Response size optimization (fields)
- Clean MVC structure
- High performance API design

---

📚 Learning Outcomes

- Learned how to optimize APIs for high traffic
- Implemented pagination using LIMIT & OFFSET
- Learned query filtering techniques
- Reduced response size using field selection
- Understood API contract redesign
- Improved backend performance
- Hands-on experience with real-world optimization

---

🔗 Connect with me

👉 LinkedIn: https://www.linkedin.com/in/your-linkedin-username

---

💡 Author

Fardin Saluji
