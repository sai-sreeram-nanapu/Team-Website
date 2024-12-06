const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./backend/routes/auth');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve Static Files
app.use(express.static(path.join(__dirname, 'frontend')));

// Root Route (Serve index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Use Routes
app.use('/api/auth', authRoutes);

// Fallback for Undefined Routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
