
<div align="center">

# 📸 InstaVibe : Social Media App

![Status](https://img.shields.io/badge/Status-Active-success)
![Tech](https://img.shields.io/badge/React.js-MongoDB-blue)
![License](https://img.shields.io/badge/License-Educational-orange)

<h3 align="center">
📂 GitHub:
<a href="https://github.com/Kalpesh0389">View Repository</a>
</h3>

</div>

---

## 📌 About InstaVibe

**InstaVibe** is a full-stack social media web application that lets users share moments by uploading photos along with their username — creating a vibrant, scrollable community feed. Built with a clean React.js frontend and a Node.js + MongoDB backend, it delivers a fast and smooth content experience through well-structured REST APIs.

InstaVibe focuses on **photo sharing**, **real-time feed rendering**, and **seamless content loading**, making it a solid foundation for a modern social media platform.

---

## ✨ Key Highlights

* 📷 Photo upload with username for every post
* 📜 Scrollable feed displaying all user posts in real time
* ⚡ REST APIs for fast post creation and feed fetching
* 🗄️ MongoDB for secure storage of users, posts, and images
* 🎨 Clean and responsive React.js UI
* 🔄 Smooth and fast content loading experience

---

## 🚀 Features

### 👤 User Features
* Upload photos with a username to create posts
* Browse a scrollable feed of all community posts
* View posts from all users in one unified feed
* Fast and smooth content loading with REST API calls

### 🖥️ Application Features
* Responsive React.js UI that works across screen sizes
* REST API endpoints for adding posts and fetching feed
* MongoDB-backed storage for user details, post data, and images
* Lightweight and fast single-page application

---

## 🏗️ Tech Stack

| Layer      | Technologies                    |
| ---------- | ------------------------------- |
| Frontend   | React.js, CSS                   |
| Backend    | Node.js, Express.js             |
| Database   | MongoDB                         |
| API Style  | REST API                        |
| Storage    | MongoDB (images & post data)    |

---

## 📁 Project Structure

```
InstaVibe/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Feed.jsx
│   │   │   ├── PostCard.jsx
│   │   │   └── UploadForm.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── Backend/
│   ├── controllers/
│   │   └── postController.js
│   ├── models/
│   │   └── Post.js
│   ├── routes/
│   │   └── postRoutes.js
│   ├── middleware/
│   │   └── upload.js
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
* Node.js (v16+)
* MongoDB
* Git

### Clone Repository
```bash
git clone https://github.com/Kalpesh0389/instavibe.git
cd instavibe
```

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd Backend
npm install
npm start
```

---

## 🌐 Environment Variables

Create a `.env` file in the **Backend** folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 🗄️ Database Schema

| Collection  | Description                                    |
| ----------- | ---------------------------------------------- |
| `users`     | Stores usernames and account details           |
| `posts`     | Holds post data including username and caption |
| `images`    | Stores uploaded image data linked to posts     |

---

## 🔮 Future Enhancements

* ❤️ Like and comment on posts
* 👤 User profile pages with post galleries
* 🔐 JWT-based authentication and secure login
* 🔔 Notifications for likes and comments
* 🔍 Search users and explore posts by tags
* ☁️ Cloudinary integration for scalable image storage

---

## 👨‍💻 Author

**Kalpesh Remje**

Full Stack Developer | ML Engineer | Java Developer

📧 Email: [remjekalpesh486@gmail.com](mailto:remjekalpesh486@gmail.com)

🔗 GitHub: [https://github.com/Kalpesh0389](https://github.com/Kalpesh0389)

---

## 📜 License

This project is developed for **educational purposes** and is open for learning and improvement.

---

<div align="center">
⭐ <em>If you like this project, don't forget to star the repository!</em> ⭐
</div>
