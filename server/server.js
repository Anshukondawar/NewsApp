 const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// API endpoint to serve news from the JSON file
app.get("/api/news", (req, res) => {
  const filePath = path.join(__dirname, 'data', 'news.json');

  // Read the JSON file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return res.status(500).json({ error: "Failed to load news data" });
    }

    // Parse and send the JSON data
    res.json(JSON.parse(data));
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
