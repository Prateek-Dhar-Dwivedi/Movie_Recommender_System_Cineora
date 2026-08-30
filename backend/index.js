const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || "https://movie-recommender-system-4-t5zw.onrender.com";

// Test route
app.get("/", (req, res) => {
    res.send("Movie Backend Running");
});

// Movie Titles List API (for Autocomplete)
app.get("/api/movies", async (req, res) => {
    try {
        const response = await axios.get(`${ML_SERVICE_URL}/api/movies`, {
            timeout: 60000
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching movies list:", error.message);
        if (error.response) {
            return res.status(error.response.status).json(error.response.data);
        }
        res.status(500).json({ error: "Failed to fetch movie list" });
    }
});

// Recommendation API
app.get("/api/recommend/:movie", async (req, res) => {
    try {
        const movie = req.params.movie;
        const response = await axios.get(
            `${ML_SERVICE_URL}/api/recommend/${encodeURIComponent(movie)}`,
            { timeout: 60000 }
        );
        res.json(response.data);
    } catch (error) {
        console.error("Recommendation request error:", error.message);
        if (error.response) {
            return res.status(error.response.status).json(error.response.data);
        }
        res.status(500).json({
            error: "Recommendation service currently unavailable or waking up. Please try again."
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

