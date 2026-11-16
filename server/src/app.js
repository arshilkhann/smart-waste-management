
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL
}));

app.use(express.json());

// Test API
app.get("/api/v1/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Smart Waste Management API is running"
    });
});

export default app;
