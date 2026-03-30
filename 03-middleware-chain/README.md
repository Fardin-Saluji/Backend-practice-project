🚀 Just Built: Middleware Chain API (Node.js) 🔐

I recently built a backend project where I implemented a Middleware Chain using Node.js & Express.

This project helped me understand how real backend systems handle authentication and request tracking.

---

🔗 Postman API Link:
https://fardinsaluji-2836416.postman.co/workspace/fardin-saluji's-Workspace~e97d20b3-8255-42ec-8afe-4e2fff9b6306/request/49870578-5ab83c14-af70-41e8-8a74-c4c5649f1a7a?action=share&source=copy-link&creator=49870578

---

✨ Key Features:
• Middleware chaining (Auth + Timer)
• Dummy token-based authentication
• Protected route "/profile"
• Request execution time logging
• Clean and modular folder structure

---

📂 Project Structure:
```
middleware-chain/
│── middlewares/
│   ├── authMiddleware.js
│   ├── timerMiddleware.js
│── routes/
│   ├── profile.js
│── app.js
│── package.json
```
---

🧠 Learning Outcomes:

• Understood how middleware works in Express
• Learned how to protect routes using authentication
• Implemented middleware chaining (multiple middlewares in one route)
• Learned how request flows through middleware → route → response
• Implemented logging system (request execution time)
• Improved backend code structure & modularization

---

⚙️ How It Works:

1️⃣ Auth Middleware
Checks token from query:
👉 "/profile?token=1234"

✔️ If token correct → request allowed
❌ If token wrong → returns:
👉 401 Unauthorized (Invalid Token)

---

2️⃣ Timer Middleware
Logs how much time request takes:

🖥️ Example (Terminal Output):
```
Auth Successful
Request Time: 6 ms
```
---

📊 What Terminal Output Means:

• "Auth Successful" → Token verified successfully
• "Request Time: 6 ms" → API response time (performance check)

---

❌ Unauthorized Example:
```
http://localhost:3000/profile?token=wrong
```
Response:
```
401 Unauthorized: Invalid Token
```
---

✅ Authorized Example:
```
http://localhost:3000/profile?token=1234
```
Response:
```
Welcome to your profile page
```
---

💡 This project helped me understand how backend systems handle
security + performance monitoring together.

---

🚀 I’m continuously improving my Backend & Full Stack skills!

🙌 Feedback is welcome — let’s connect and grow together
