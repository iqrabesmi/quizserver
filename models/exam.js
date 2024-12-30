const mongoose = require('mongoose'); 

var examSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    answers: {
        type: [Number],
        required: true,
    },
    totalCorrectAnswers: {
        type: Number,
        required: true,
    },
    screeningTestMarks: {
        type: Number,
        required: true,
    },
});


let examModel = mongoose.model('exam', examSchema);

module.exports = {
    examModel,
}