

🚀 Project Overview
This application is a comprehensive Store Rating System built to demonstrate FullStack development capabilities. It features a Single Login System that manages three distinct user roles: System Administrator, Normal User, and Store Owner, each with role-specific access and functionalities.

🛠️ Technology Stack
Frontend: ReactJs (Modular Component Architecture)

Backend: Node.js & Express.js

Database: MySQL / PostgreSQL using Sequelize ORM

Authentication: JSON Web Tokens (JWT) for secure, role-based sessions

✨ Key Features
Unified Authentication: Users are automatically redirected to their respective dashboards based on their assigned role upon login.

System Admin Dashboard: Provides high-level statistics including total counts of registered users, stores, and submitted ratings.

Normal User Experience:

Search and filter stores by Name or Address.

Submit and modify ratings on a strict 1 to 5 star scale.

Store Owner Insights: Owners can view the average rating of their specific store and see a detailed list of users who provided feedback.

Strict Validations: * Name: Enforced length of 20 to 60 characters.

Address: Maximum limit of 400 characters.

Password: Complexity requirements (8-16 chars, uppercase, and special characters).

Data Organization: All tables across the platform support Ascending and Descending sorting.

📂 Installation and Setup
1. Prerequisites
Node.js installed

MySQL or PostgreSQL database running

2. Backend Setup
Navigate to the directory: cd backend

Install dependencies: npm install

Configure your database credentials in config/db.js.

Start the server: node server.js (This will automatically sync your database tables).

3. Frontend Setup
Navigate to the directory: cd frontend

Install dependencies: npm install

Start the application: npm start

📝 Best Practices Implemented
Separation of Concerns: Distinct folders for Models, Routes, and Controllers.

Relational Database Design: Proper associations (HasMany/BelongsTo) between Users, Stores, and Ratings.

Environment Security: Used .gitignore to protect sensitive files like node_modules during the GitHub upload.
