# 💬 Talkie - Real-Time Chat Application

## Description

Talkie is a real-time messaging application designed to facilitate seamless communication between users. Whether you're looking to connect with friends, collaborate with colleagues, or build a vibrant community, this app provides a feature-rich and intuitive messaging experience.

## Key Features

- 🔐 User Authentication

  - Secure user registration and login
  - Password encryption

- 💬 Real-time Messaging

  - Instant message sending and receiving
  - Typing indicators

- 👥 User Management

  - Create and manage user profiles
  - Add/remove contacts

- 📁 File Sharing

  - Send images, documents, and other file types

- 🌙 Dark/Light Mode

  - Customizable UI theme

- 📱 Responsive Design
  - Works seamlessly across desktop and mobile devices

## Technologies Used

### Frontend

- React.js
- Tailwind CSS
- React Router
- Axios

### Backend

- Node.js
- Express.js
- Socket.io
- MongoDB
- Mongoose

### Authentication

- JSON Web Tokens (JWT)
- bcrypt for password hashing

### Deployment

- Heroku
- Netlify
- MongoDB Atlas

## Installation

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/FahdAzmy/Talkie.git
cd Talkie
```

### Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Set Up Environment Variables

Create a `.env` file in both `backend` and `frontend` directories with the following variables:

#### Backend `.env`

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

#### Frontend `.env`

```
REACT_APP_API_URL=http://localhost:5000/api
```

### Run the Application

```bash
# Start backend server
cd backend
npm start

# In another terminal, start frontend
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows our coding standards and includes appropriate tests.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Fahd Azmy - [fahd.azmy@example.com](mailto:fahd.azmy@example.com)

Project Link: [https://github.com/FahdAzmy/Talkie](https://github.com/FahdAzmy/Talkie)

---

**Made with ❤️ by Fahd Azmy**
