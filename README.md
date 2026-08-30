<div align="center">
        
# 🎬 Movie_Recommender_System_Cineora

</div>

<div align="center">

### Discover Movies You'll Love with AI-Powered Recommendations

[![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=white)]()
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white)]()
[![Flask](https://img.shields.io/badge/Flask-ML_Service-000000?style=for-the-badge&logo=flask&logoColor=white)]()
[![Python](https://img.shields.io/badge/Python-ML-yellow?style=for-the-badge&logo=python)]()
[![Vercel](https://img.shields.io/badge/Vercel-Frontend-black?style=for-the-badge&logo=vercel)]()
[![Render](https://img.shields.io/badge/Render-Backend-46E3B7?style=for-the-badge)]()

</div>

---

## 📖 About The Project

Cineora is an AI-powered Movie Recommendation System that helps users discover movies similar to their favorite films.

The application leverages the **TMDB (The Movie Database) dataset** along with a Machine Learning recommendation engine based on **Content-Based Filtering** and **Cosine Similarity** to generate personalized movie suggestions.

The platform combines a modern React frontend, a Node.js backend, and a Flask-based ML service to deliver fast and accurate recommendations with movie posters and metadata.


---

## ✨ Features

- 🎬 Intelligent Movie Recommendations
- 🔍 Search Movies Instantly
- 🤖 Machine Learning-Based Suggestion Engine
- 🖼️ Dynamic Movie Posters
- ⚡ Fast API Responses
- 📱 Responsive User Interface
- ☁️ Cloud Deployment
- 🎨 Modern and Interactive Design

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Axios

### Backend
- Node.js
- Express.js

### Machine Learning
- Python
- Flask
- Pandas
- NumPy
- Scikit-Learn
- Cosine Similarity Algorithm

### Deployment
- Vercel (Frontend)
- Render (Backend & ML Service)

## 🎞️ Dataset

This project utilizes data from **TMDB (The Movie Database)**, one of the world's largest movie information databases.

Dataset information includes:

- Movie Titles
- Genres
- Overview/Synopsis
- Keywords
- Cast Information
- Crew Information
- Movie Posters
- Ratings and Metadata

The dataset is processed and transformed into feature vectors that power the recommendation engine.

---

## 🧠 Recommendation Engine

The recommendation system follows a Content-Based Filtering approach:

### Workflow

```text
User Selects Movie
        │
        ▼
React Frontend
        │
        ▼
Node.js Backend
        │
        ▼
Flask ML Service
        │
        ▼
Cosine Similarity Algorithm
        │
        ▼
Recommended Movies
```

### Machine Learning Pipeline

- Data Collection
- Data Cleaning
- Feature Engineering
- Vectorization
- Similarity Matrix Generation
- Recommendation Generation

---

## 📂 Project Structure

```text
Movie_Recommender_System_Cineora/
│
├── frontend/
│   ├── src/
│   ├── assets/
│   ├── components/
│   └── pages/
│
├── backend/
│   ├── package.json
│   └── index.js
│
├── ml-service/
│   ├── Preprocess_Movie_Rec_Sys.py
│   ├── app_movie_rec_sysd2.py
│   ├── build.sh
|   ├── test_model_movie_rec_sys.py
|   ├── train_model_movie_rec_sys.py
│   └── requirements.txt
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/Prateek-Dhar-Dwivedi/Movie_Recommender_System_Cineora_Frontend.git
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### ML Service Setup

```bash
pip install -r requirements.txt
python app.py
```

---

## 🎯 How It Works

1. User enters a movie title.
2. React frontend sends a request to the backend.
3. Backend communicates with the Flask ML service.
4. The ML model computes similarity scores.
5. Recommended movies are returned.
6. Posters and movie information are displayed to the user.

---

## 🚀 Live Demo

🔗 **Frontend Demo**

Add your deployed Vercel URL here:

```text
https://movie-recommender-system-cineora-fr.vercel.app/
```

---

## 📈 Future Enhancements

- User Authentication
- Personalized User Profiles
- Genre-Based Filtering
- Trending Movies Section
- Watchlist Feature
- Rating & Review System
- AI Chat Movie Assistant
- Recommendation History

---

## 🎓 Learning Outcomes

Through this project, I gained hands-on experience with:

- Full-Stack Web Development
- React.js Development
- REST API Integration
- Machine Learning Deployment
- Flask API Development
- Cloud Deployment using Vercel and Render
- Recommendation Systems
- Git & GitHub Collaboration

---

## 👨‍💻 Developer

### Prateek Dhar Dwivedi

- GitHub: https://github.com/Prateek-Dhar-Dwivedi

Repository:

https://github.com/Prateek-Dhar-Dwivedi/Movie_Recommender_System_Cineora_Frontend

---

## ⭐ Support

If you found this project useful, consider giving it a **Star ⭐** on GitHub.

---

<div align="center">

### 🎬 Bringing Intelligent Movie Discovery to Everyone

Made with ❤️ using React, Node.js, Flask & Machine Learning

</div>
