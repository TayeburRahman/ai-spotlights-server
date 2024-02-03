require("dotenv").config();
// const path = require('path');
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const app = express();
const port = process.env.PORT || 5000;

// Routes
const authRouter = require("./routes/auth.routes");
const usersRouter = require("./routes/users.route");
const toolsRouter = require("./routes/tools.routes");
const blogsRouter = require("./routes/blogs.routes");

// test
const userModels = require("./models/user.models");


// Middleware
app.use(cors());  
app.use(express.json());

// const root = path.join(__dirname, 'client', 'build');
// app.use(express.static(root));
// app.get('*', (res) => {
//   res.sendFile('index.html', { root });
// })

// Database Connect
connectDB();

// Bypassed Api's
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/api/v1/tools", toolsRouter);
app.use("/api/v1/blogs", blogsRouter);

app.post('/tasks', async (req, res) => {
  try {
    const { title, description } = req.body; // Assuming request body contains title and description
    const newTask = await Task.create({ title, description }); // Create new task
    res.status(201).json(newTask); // Respond with the created task
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
});


app.get("/", (req, res) => {
  res.send("Ai SpotLights Is Running");
});

app.listen(port, () => {
  console.log(`Ai SpotLights Is Running On Port http://localhost:${port}`);
});
