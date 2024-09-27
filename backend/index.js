const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connected to MongoDB'))
   .catch((error) => console.error('Connection error:', error));

// Basic route
app.get('/', (req, res) => {
   res.send('Hello from the backend!');
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
