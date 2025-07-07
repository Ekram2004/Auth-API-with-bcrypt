# 🛡️ Auth API with JWT and Bcrypt

A simple and secure authentication API built using **Node.js**, **Express**, **MongoDB**, **Mongoose**, **bcrypt**, and **JWT**. This project allows users to **sign up** and **log in**, with passwords securely hashed and login protected by **JSON Web Tokens (JWT)**.

---

## 🚀 Features

- User Registration (Sign Up)
- User Login with JWT Token
- Password Hashing using bcrypt
- Protected Routes (with JWT Middleware)
- Environment variables using `.env`

---

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **MongoDB (Mongoose)**
- **bcrypt** – for password encryption
- **jsonwebtoken (JWT)** – for token-based authentication
- **dotenv** – for environment configuration

---

## 📂 Project Structure

signup-loginAPI/
├── models/
│ └── User.js
├── middleware.js
├── routes.js
├── .env
├── .gitignore
├── package.json
└── README.md


---

## ⚙️ How to Run

1. **Clone the repository**

```bash
git clone https://github.com/Ekram2004/Auth-API-with-bcrypt.git
cd Auth-API-with-bcrypt

Install dependencies
npm install
Create .env file

PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
Run the server
node routes.js

🧪 Test with Postman
POST /signup – Sign up a new user

POST /login – Log in and receive a JWT token

GET /protected – Example protected route (requires token)

Set header for protected route:

makefile
Authorization: Bearer <your-token>

Future Improvements

Add logout and refresh token

Add email verification

Add roles (admin/user)

Connect frontend (React/Vue/etc)

)

📚 License
This project is licensed under the MIT License.

.

👤 Author
Ekram Asrar
https://github.com/Ekram2004

---

## 📌 What to Do Next:

- Create a new file: `README.md`
- Paste the content above
- Update `your_mongodb_uri` and `your_secret_key` if you're sharing
- Commit it:

```bash
git add README.md
git commit -m "Add project README"
git push




