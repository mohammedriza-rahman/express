const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.post("/api/chat", (req, res) => {
    const { profession, description } = req.body;

    if (!profession || !description) {
        return res.status(400).json({ message: "Please provide all required fields." });
    }

    const message = `You are a ${profession}. Here's what you described: ${description}`;
    res.json({ message });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
