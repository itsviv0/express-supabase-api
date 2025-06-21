# 🧩 Problem Addressed

This project solves a common foundational challenge in modern web development:

How can I build and deploy a fully custom backend that exposes secure, scalable API endpoints with persistent data storage—without relying on third-party APIs?

# 🎯 Key Pain Points Solved:

Developers often need a flexible backend with custom logic and full control over data handling—especially for MVPs, internal tools, or microservices.

Managing a full server and database setup traditionally requires infrastructure knowledge (e.g., Docker, hosting, database provisioning), which can slow down iteration.

Relying on public APIs often doesn't offer the flexibility or security required for production use cases.

# ✅ Solution Offered by This Project

This repository demonstrates a clean and scalable approach:

- 🔧 Express.js – Enables the creation of custom, RESTful API endpoints with complete control over routing and logic.

- 🛢️ Supabase (PostgreSQL) – Acts as a fully managed database solution with a simple setup, real-time support, and rich querying.

- ☁️ Vercel (Serverless) – Handles seamless deployment of the Express backend as serverless functions, reducing infrastructure overhead.

- 🔄 CRUD Operations – Users can create, read, update, and delete notes—showcasing full API lifecycle handling.

This pattern can be extended to many real-world apps: to-do systems, bug trackers, inventory dashboards, learning portals, and more.

# ✍️ Define the Table Schema

> table notes

| Field Name | Type                     | Is Primary Key? | Default Value      | Is Nullable |
| ---------- | ------------------------ | --------------- | ------------------ | ----------- |
| id         | UUID                     | ✅ Yes          | uuid_generate_v4() | ❌ No       |
| title      | Text                     | ❌ No           | (leave blank)      | ❌ No       |
| content    | Text                     | ❌ No           | (leave blank)      | ❌ No       |
| created_at | Timestamp with Time Zone | ❌ No           | now()              | ❌ No       |
