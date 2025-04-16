# 👤 User API – Node.js + Express + MongoDB

A simple REST API that fetches user details by ID — only if the user is over 21. Built with Node.js, Express, MongoDB, and Mongoose.

---

## ✨ Features

- ✅ GET `/users/:id` – Retrieve a user by ID (age must be > 21)
- ⚠️ 404 if user not found or underage
- 🚫 400 if ObjectId is invalid
- 📚 Swagger UI documentation
- 🔥 Hot-reloading with nodemon
- 🧪 API tested using Jest or Pytest-compatible test scripts
- 🐳 Docker & Docker Compose ready
- 🌱 Seed script for demo data

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/user-api.git
cd user-api
npm install
2. Set Up MongoDB
Make sure MongoDB is running locally or update MONGO_URI in .env or app.js.

🧪 Running the App
Start with Node:
bash
Copy
Edit
npm start
Start in Dev Mode (hot reload):
bash
Copy
Edit
npm run dev
🧬 Seed the Database
bash
Copy
Edit
node seed.js
This adds sample users, including some under and over 21.

📖 API Docs
Once the server is running, visit:

bash
Copy
Edit
http://localhost:3000/api-docs
Built with Swagger UI!

🧪 Testing
Option 1: Jest + Supertest (Node.js)
bash
Copy
Edit
npm test
Option 2: Pytest + Requests (Python)
bash
Copy
Edit
pytest test_api.py
Ensure the server is running on localhost:3000.

🐳 Docker Usage
Build and Start
bash
Copy
Edit
docker-compose up --build
The API will be live at:

arduino
Copy
Edit
http://localhost:3000
MongoDB will be available at mongodb://localhost:27017/userdb.

📬 Postman Collection
Import the included postman_collection.json into Postman to test endpoints manually.

📁 Project Structure
pgsql
Copy
Edit
├── app.js                 # Entry point
├── models/
│   └── user.js            # Mongoose schema
├── routes/
│   └── users.js           # GET /users/:id route
├── seed.js                # Seed script
├── tests/
│   └── user.test.js       # Jest test
├── postman_collection.json
├── Dockerfile
├── docker-compose.yml
└── README.md
📜 License
MIT – free for personal or commercial use.