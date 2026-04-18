# 🚀 Soft Delete API System (MongoDB + Node.js + Express)

## 📌 Overview
This project demonstrates a Soft Delete System used in real-world backend applications.  
Instead of permanently deleting data, records are marked as deleted using a flag, enabling data recovery and audit tracking.

---

## 🎯 Scenario
Users should NOT be deleted permanently.

System should:
- Preserve deleted data  
- Allow restoring deleted users  
- Hide deleted users from normal API responses  

---

## ⚙️ Features

- ✅ Create User API  
- 👀 Get Users (only active users)  
- 🗑️ Soft Delete User (no permanent deletion)  
- ♻️ Restore Deleted User  
- 📦 Clean JSON responses  
- ⚠️ Proper error handling  

---

## 🧠 Concepts Covered

- Soft Delete vs Hard Delete  
- Data Recovery System  
- MongoDB Schema Design  
- REST API Design  
- Controller Architecture  

---

## 📂 Folder Structure
```
soft-delete-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│
├── app.js
├── server.js
├── package.json
```
---

## 🔗 API Endpoints

### 1️⃣ Create User  
POST /api/users
```
Request:
{
  "name": "Rahul",
  "email": "rahul123@gmail.com"
}
```

Response:
```
{
  "success": true,
  "data": {
    "name": "Rahul",
    "email": "rahul123@gmail.com",
    "isDeleted": false
  }
}
```
---

### 2️⃣ Get Users  
GET /api/users  

✔️ Returns only active users  
❌ Deleted users are hidden  

---

### 3️⃣ Soft Delete User  
DELETE /api/users/:id

Response:
```
{
  "message": "User soft deleted",
  "isDeleted": true,
  "deletedAt": "timestamp"
}
```
---

### 4️⃣ Restore User  
PUT /api/users/restore/:id

Response:
```
{
  "message": "User restored",
  "isDeleted": false
}
```
---

## 📬 Postman Collection

https://fardinsaluji-2836416.postman.co/workspace/fardin-saluji's-Workspace~e97d20b3-8255-42ec-8afe-4e2fff9b6306/request/49870578-b4ef7dc3-9ccc-468e-a277-94ad9e796268

---

## 💡 Learning Outcomes

- Learned how real apps handle safe deletion  
- Implemented soft delete using isDeleted flag  
- Built data recovery functionality  
- Improved backend architecture understanding  
- Practiced clean API design and responses  

---

## 🚀 How to Run

npm install  
npm run dev  

Server runs on:  
http://localhost:3000  

---

## 🔥 Key Takeaway

Production systems avoid permanent deletion and use soft delete to ensure data safety and recovery.

---

## 👨‍💻 Author

Fardin Saluji
