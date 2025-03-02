const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require('./models/User')
const bcrypt=require('bcryptjs')
const Recipe = require("./models/Recipe");
const jwt = require("jsonwebtoken");  

const app=express()
const PORT=5000
app.use(express.json());

//Home page api
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
  
    if (!token) {
      return res.status(403).json({ message: "Unauthorized Access - No token provided" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.id;
      next();
    } catch (error) {
      return res.status(403).json({ message: "Invalid token" });
    }
  };
  
  // Home Route
  app.get("/", (req, res) => {
    res.send("<h1 align=center>Welcome to Recipe App</h1>");
  });
  
  // Register Route
  app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: "Email already registered" });
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
  
      await user.save();
      res.json({ message: "User Registered Successfully!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Registration failed" });
    }
  });
  
  // Login Route
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // ✅ Create JWT Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login Successful", token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Login failed" });
    }
});

  
  // Create Recipe Route (Protected)
  app.post("/recipes", verifyToken, async (req, res) => {
    try {
      const { name, description, ingredients, instructions, imageUrl, cookingTime } = req.body;
      
      const recipe = new Recipe({
        name,
        description,
        ingredients,
        instructions,
        imageUrl,
        cookingTime,
        userOwner: req.userId, // Authenticated user
      });
  
      await recipe.save();
      res.json({ message: "Recipe Created Successfully!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to create recipe" });
    }
  });
  
  // Connect to MongoDB
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log("DB connection error:", err));
  
  // Start Server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });