const mongoose = require('mongoose');

// Define the schema for the User
const JSTSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    behaviour: { type: Number, default: 0 },
    communication: { type: Number, default: 0 },
    motorCoordination: { type: Number, default: 0 },
    numberConcepts: { type: Number, default: 0 },
    readingAndWriting: { type: Number, default: 0 },
    soundAwareness: { type: Number, default: 0 },
    Fluency: { type: Number, default: 0 },
    letterWriting: { type: Number, default: 0 },
    Listening: { type: Number, default: 0 },
    phonemeReplacement: { type: Number, default: 0 },
    rhymeTest: { type: Number, default: 0 },
    wordReading: { type: Number, default: 0 },
    wordWriting: { type: Number, default: 0 },
    letterReading: { type: Number, default: 0 },
    pictureNaming: { type: Number, default: 0 }
}, {
    timestamps: true // This will add createdAt and updatedAt fields
});

// Create a User model using the schema
const JST = mongoose.model('JST', JSTSchema);

module.exports = {
    JST
} ;
