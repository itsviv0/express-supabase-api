# 📘 express-supabase-api

A simple, serverless Express.js API powered by Supabase PostgreSQL and deployed on Vercel. This project demonstrates how to build and deploy a custom backend with CRUD functionality using modern tools and infrastructure.

---

## 🚀 Features

- ✅ RESTful API built with Express.js
- ✅ PostgreSQL database via Supabase
- ✅ Serverless deployment with Vercel
- ✅ CRUD operations for managing notes
- ✅ Environment-based configuration for security

---

## 🧱 Tech Stack

- **Backend Framework**: Express.js
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel Serverless Functions
- **Environment Management**: `.env` + Vercel Secrets

---

## 📂 Project Structure

```express-supabase-api/
├── api/
│ └── index.js # Main Express server and API routes
├── .env # Local environment variables
├── vercel.json # Vercel serverless function configuration
├── package.json
└── README.md
```


---

## 📦 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/express-supabase-api.git
cd express-supabase-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a .env file and add your Supabase project details:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-service-role-key
```

### 4. Run Locally

```bash
node api/index.js
Visit: http://localhost:3000/api/notes
```