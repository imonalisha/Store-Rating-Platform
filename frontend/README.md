# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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