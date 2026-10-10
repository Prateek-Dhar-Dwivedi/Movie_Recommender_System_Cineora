const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || "https://movie-recommender-system-4-t5zw.onrender.com";

// Helper with automatic retry to gracefully handle Render cold-start wakeups (429, 503, 502)
async function fetchFromMlWithRetry(endpoint, retries = 4, delayMs = 4000) {
    const url = `${ML_SERVICE_URL}${endpoint}`;
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await axios.get(url, { timeout: 60000 });
        } catch (error) {
            const isWakeUpError =
                (error.response && (error.response.status === 429 || error.response.status === 503 || error.response.status === 502)) ||
                error.code === "ECONNABORTED" ||
                error.code === "ECONNREFUSED" ||
                error.code === "ETIMEDOUT";

            if (isWakeUpError && attempt < retries) {
                console.log(`[Attempt ${attempt}/${retries}] ML service is waking up. Retrying in ${delayMs / 1000}s...`);
                await new Promise((resolve) => setTimeout(resolve, delayMs));
                continue;
            }
            throw error;
        }
    }
}

// Keep ML service warm periodically
const PING_INTERVAL = 10 * 60 * 1000; // 10 minutes
setInterval(() => {
    axios.get(`${ML_SERVICE_URL}/`).catch(() => {});
}, PING_INTERVAL);

// Test route
app.get("/", (req, res) => {
    res.send("Movie Backend Running");
});

// Movie Titles List API (for Autocomplete)
app.get("/api/movies", async (req, res) => {
    try {
        const response = await fetchFromMlWithRetry("/api/movies", 3, 4000);
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
        const response = await fetchFromMlWithRetry(
            `/api/recommend/${encodeURIComponent(movie)}`,
            4,
            4000
        );
        res.json(response.data);
    } catch (error) {
        console.error("Recommendation request error:", error.message);
        if (error.response) {
            return res.status(error.response.status).json(error.response.data);
        }
        res.status(500).json({
            error: "Recommendation service is waking up from sleep. Please try again in a few moments."
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

