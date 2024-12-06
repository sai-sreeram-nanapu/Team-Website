const mongoose = require('mongoose');

const trailerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    trailerUrl: { type: String, required: true },
    description: { type: String, required: true }
});

const Trailer = mongoose.model('Trailer', trailerSchema);
module.exports = Trailer;
