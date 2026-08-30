import os
import pickle
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
# Allow CORS for all origins or specific Vercel domains
CORS(app)

@app.route("/")
def home():
    return "Welcome to Movie Recommender System"

# Load ML data safely
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
movies_path = os.path.join(BASE_DIR, "movies.pkl")
similarity_path = os.path.join(BASE_DIR, "similarity.pkl")

# Fallback to current working directory if not in BASE_DIR
if not os.path.exists(movies_path):
    movies_path = "movies.pkl"
if not os.path.exists(similarity_path):
    similarity_path = "similarity.pkl"

movies = pickle.load(open(movies_path, "rb"))
similarity = pickle.load(open(similarity_path, "rb"))

@app.route("/api/movies", methods=["GET"])
def get_movies():
    """Return all movie titles for frontend search autocomplete"""
    try:
        titles = movies['title'].dropna().tolist()
        return jsonify(titles)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/recommend/<movie>", methods=["GET"])
def recommend(movie):
    try:
        movie_clean = movie.strip().lower()
        if not movie_clean:
            return jsonify({"error": "Movie name cannot be empty"}), 400

        # 1. Exact case-insensitive match
        matched_movies = movies[movies['title'].astype(str).str.strip().str.lower() == movie_clean]
        
        # 2. Fallback to substring / partial match
        if matched_movies.empty:
            matched_movies = movies[movies['title'].astype(str).str.lower().str.contains(movie_clean, regex=False, na=False)]
            
        if matched_movies.empty:
            return jsonify({"error": f"Movie '{movie}' not found in database"}), 404

        movie_index = matched_movies.index[0]
        distances = similarity[movie_index]
        movie_list = sorted(
            list(enumerate(distances)),
            reverse=True,
            key=lambda x: x[1]
        )[1:11]
        
        recommendations = [movies.iloc[i[0]].title for i in movie_list]
        return jsonify(recommendations)
    except Exception as e:
        print("ERROR:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

