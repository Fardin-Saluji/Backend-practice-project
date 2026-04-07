🛒 High Traffic API Redesign (User API)

This project is a Backend API Optimization Task where a slow "/users" API is redesigned to efficiently handle large datasets using modern backend techniques.

---

🚀 Features

- Get all users
- Pagination support (fast data loading)
- Filtering (by name, age)
- Sorting (ascending / descending)
- Field selection (reduce response size)
- Create new users

---

🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

---

📂 Folder Structure
```
user-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── .env
├── app.js
├── server.js
├── package.json
```
---

⚙️ Installation & Setup
```
git clone https://github.com/Fardin-Saluji/React-Learning-Projects.git
cd 14-shopping-cart   # (or your API folder)
npm install
```
---

▶️ Run Server
```
npm run dev
# OR
node server.js
```
---

🔐 Environment Variables (.env)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/userdb
```
---

📡 API Endpoints

🔹 Get All Users
```
GET /api/users
```
---

🔹 Pagination
```
GET /api/users?page=1&limit=5
```
---

🔹 Filtering
```
GET /api/users?age=22
GET /api/users?name=Fardin
```
---

🔹 Sorting
```
GET /api/users?sort=age
GET /api/users?sort=-age
```
---

🔹 Field Selection
```
GET /api/users?fields=name,email
```
---

🔹 Create User
```
POST /api/users
```
Body:
```
{
  "name": "Fardin",
  "email": "fardin@gmail.com",
  "role": "user",
  "age": 22
}
```
---

📊 API Response Structure
```
{
  "status": "success",
  "page": 1,
  "results": 2,
  "data": [
    {
      "_id": "...",
      "name": "Fardin",
      "email": "fardin@gmail.com",
      "role": "user",
      "age": 22
    }
  ]
}
```
---

📮 Postman API Testing

👉 Test all APIs here:
🔗 https://fardinsaluji-2836416.postman.co/workspace/fardin-saluji's-Workspace~e97d20b3-8255-42ec-8afe-4e2fff9b6306/request/49870578-b4ef7dc3-9ccc-468e-a277-94ad9e796268?action=share&source=copy-link&creator=49870578

---

🧠 Learning Outcomes

- Learned how to optimize APIs for large datasets
- Implemented pagination using skip & limit
- Applied filtering using query parameters
- Implemented sorting dynamically
- Reduced response size using field selection
- Built clean backend architecture (MVC pattern)
- Integrated MongoDB with Mongoose
- Handled errors properly in APIs

---

⚡ Performance Improvements

- Reduced response size using field selection
- Faster data loading using pagination
- Efficient filtering (no full dataset load)
- Improved scalability for high traffic APIs

---

🙌 Connect with Me

🔗 LinkedIn: https://www.linkedin.com/in/fardinsaluji/

---

📌 Conclusion

This project shows how to convert a slow API into a scalable and production-ready API using backend optimization techniques.

---

🙌 Author

👤 Fardin Saluji
🔗 https://github.com/Fardin-Saluji
