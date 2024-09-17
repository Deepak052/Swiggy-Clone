import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
const port = 5000;

// Middleware to parse JSON bodies and allow CORS
app.use(express.json());
app.use(cors());

// Serve static files from the 'public' directory
app.use(
  "/images",
  express.static(path.join(path.resolve(), "src/assets/api/public/images"))
);

// Endpoint to get data from category.json
app.get("/categories", (req, res) => {
  const filePath = path.join(
    path.resolve(),
    "src/assets/api/data/category.json"
  );

  // Read the file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Parse JSON data
    try {
      const categories = JSON.parse(data);
      res.json(categories);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});

// Endpoint for restaurant chains
app.get("/top-restaurant-chains", (req, res) => {
  const filePath = path.join(
    path.resolve(),
    "src/assets/api/data/restaurantChains.json"
  );
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      const restaurantChains = JSON.parse(data);
      res.json(restaurantChains);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
