# Event Management Dashboard

This is a full-stack Event Management Dashboard website created with HTML, CSS, JavaScript for the frontend, and Node.js, Express.js, MongoDB for the backend. It features real-time updates using Socket.io.

## Project Features

- **User Roles**: Organizer and Normal User.
- **Authentication**: Secure user registration and login with JWT.
- **Organizer Dashboard**: Organizers can create, edit, and delete their events. They can also see a real-time count of registered users for each event.
- **User Dashboard**: Users can browse all available events and register for them.
- **Real-time Updates**: The number of registrations updates live on all connected clients without needing a page refresh, thanks to Socket.io.

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Real-time Communication**: Socket.io
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt.js

---

## Folder Structure

```
Event-Management-Website/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Event.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── eventRoutes.js
│   └── controllers/
│       ├── authController.js
│       └── eventController.js
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── auth.js
│       └── dashboard.js
│
└── README.md
```

---

## How to Run the Project

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running, or a MongoDB Atlas connection string.

### 1. Setup the Backend

First, navigate to the backend directory:

```bash
cd Event-Management-Website/backend
```

Next, install the required npm packages:

```bash
npm install
```

### 2. Configure Environment Variables

The backend needs a connection string to your MongoDB database. You can use a local database or a cloud-based one like MongoDB Atlas.

The connection string is set in `backend/config/db.js`. For this project, it defaults to a local instance: `mongodb://localhost:27017/event-management`.

For production, it's recommended to create a `.env` file in the `backend` directory and store your variables there.

**Example `backend/.env` file:**

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=a_strong_secret_for_jwt
PORT=5000
```

The application will automatically use these variables if the `.env` file is present in it .

### 3. Start the Backend Server

Once the dependencies are installed and the database is configured, you can start the server:

```bash
node server.js
```

Or, if you want the server to automatically restart on file changes (requires `nodemon`):

```bash
npm run dev
```

The backend server will start on `http://localhost:5000` (or the port specified in your `.env` file).

### 4. Run the Frontend

The frontend is built with static HTML, CSS, and JavaScript files. You don't need a separate build step.

Simply open the `index.html` file in your web browser:

```
// Path to the file on your computer
Event-Management-Website/frontend/index.html
```

You can now use the website to register, log in, create, and manage events. The frontend will automatically connect to the backend server running on `localhost:5000`.
