🚀 Rate Limiting API System (Node.js + Express)

📌 Overview

This project demonstrates how to build a Rate Limiting API System to prevent API abuse and handle spam requests efficiently.

---

🎯 Scenario

Ek API pe continuous spam requests aa rahi thi, jisse server overload ho sakta hai.

---

🛠️ Task Implemented

- Max 5 requests per minute per user (IP based)
- Limit cross → 429 Too Many Requests
- Middleware-based implementation
- Automatic reset after 1 minute

---

🔥 Recruiter Expectations Covered

- ✅ IP tracking
- ✅ Memory storage using Map
- ✅ Time-based reset
- ✅ Middleware architecture

---

📂 Project Structure
```
rate-limit-api/
│── src/
│   ├── middleware/ → rateLimiter.js
│   ├── routes/ → testRoute.js
│── app.js
│── server.js
```
---

📡 API Endpoints

🔹 GET /api/test

✔️ Success Response (200)
```
{
  "success": true,
  "message": "API is working",
  "time": "timestamp"
}
```
❌ Rate Limit Exceeded (429)
```
{
  "success": false,
  "message": "Too many requests. Please try again after 1 minute."
}
```
---

🧪 Postman Testing (GET Request)

👉 Open Postman and use:

GET http://localhost:3000/api/test

📌 What happens:

- First 5 requests → ✅ Success (200)
- After that → ❌ 429 error (Too many requests)

---

🔗 Postman Collection Link

👉 https://fardinsaluji-2836416.postman.co/workspace/fardin-saluji's-Workspace~e97d20b3-8255-42ec-8afe-4e2fff9b6306/request/49870578-e2088b81-b919-4697-8d18-9a3da874b346

---

📸 Output Explanation

- 🟢 Image 1 → GET request success (200 OK)
- ⚠️ Image 2 → Rate limit exceeded (429 error)
- 📂 Image 3 → Project folder structure
- 📌 Image 4 → Scenario & requirements

---

⚙️ How It Works

- IP address track hota hai
- Har request ka count Map me store hota hai
- 5 se zyada requests → block
- 1 minute baad → reset

---

💡 Learning Outcomes

- Implemented Rate Limiting from scratch
- Learned Express middleware usage
- Understood HTTP status codes (200, 429)
- Built real-world backend protection logic
- Practiced API testing using Postman

---

🚀 Run Locally
```
npm install
npm run dev
```
Server:
http://localhost:3000

---

📌 Conclusion

This project demonstrates how to handle API abuse, spam requests, and performance issues using rate limiting.

---
