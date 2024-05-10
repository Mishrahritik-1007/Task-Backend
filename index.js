const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 8080;

// MongoDB connection
mongoose.connect('mongodb+srv://hrithik:hrithik@cluster0.qf818jz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/task_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true, family: 4,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(cors());
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route for tasks
app.use('/api/tasks', taskRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
