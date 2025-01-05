const mongoose = require('mongoose');

const TotalJSTSchema = new mongoose.Schema({
    Fluency: { type: [Number], default: [] },
    letterWriting: { type: [Number], default: [] },
    Listening: { type: [Number], default: [] },
    phonemeReplacement: { type: [Number], default: [] },
    rhymeTest: { type: [Number], default: [] },
    wordReading: { type: [Number], default: [] },
    wordWriting: { type: [Number], default: [] },
    letterReading: { type: [Number], default: [] },
    pictureNaming: { type: [Number], default: [] },
    
    FluencyMean: { type: Number, default: 0 },
    letterWritingMean: { type: Number, default: 0 },
    ListeningMean: { type: Number, default: 0 },
    phonemeReplacementMean: { type: Number, default: 0 },
    rhymeTestMean: { type: Number, default: 0 },
    wordReadingMean: { type: Number, default: 0 },
    wordWritingMean: { type: Number, default: 0 },
    letterReadingMean: { type: Number, default: 0 },
    pictureNamingMean: { type: Number, default: 0 },

    FluencyMedian: { type: Number, default: 0 },
    letterWritingMedian: { type: Number, default: 0 },
    ListeningMedian: { type: Number, default: 0 },
    phonemeReplacementMedian: { type: Number, default: 0 },
    rhymeTestMedian: { type: Number, default: 0 },
    wordReadingMedian: { type: Number, default: 0 },
    wordWritingMedian: { type: Number, default: 0 },
    letterReadingMedian: { type: Number, default: 0 },
    pictureNamingMedian: { type: Number, default: 0 },

    FluencySD: { type: Number, default: 0 },
    letterWritingSD: { type: Number, default: 0 },
    ListeningSD: { type: Number, default: 0 },
    phonemeReplacementSD: { type: Number, default: 0 },
    rhymeTestSD: { type: Number, default: 0 },
    wordReadingSD: { type: Number, default: 0 },
    wordWritingSD: { type: Number, default: 0 },
    letterReadingSD: { type: Number, default: 0 },
    pictureNamingSD: { type: Number, default: 0 },

    FluencyCutoff: { type: Number, default: 0 },
    letterWritingCutoff: { type: Number, default: 0 },
    ListeningCutoff: { type: Number, default: 0 },
    phonemeReplacementCutoff: { type: Number, default: 0 },
    rhymeTestCutoff: { type: Number, default: 0 },
    wordReadingCutoff: { type: Number, default: 0 },
    wordWritingCutoff: { type: Number, default: 0 },
    letterReadingCutoff: { type: Number, default: 0 },
    pictureNamingCutoff: { type: Number, default: 0 },

    FluencyTotal: { type: Number, default: 0 },
    letterWritingTotal: { type: Number, default: 0 },
    ListeningTotal: { type: Number, default: 0 },
    phonemeReplacementTotal: { type: Number, default: 0 },
    rhymeTestTotal: { type: Number, default: 0 },
    wordReadingTotal: { type: Number, default: 0 },
    wordWritingTotal: { type: Number, default: 0 },
    letterReadingTotal: { type: Number, default: 0 },
    pictureNamingTotal: { type: Number, default: 0 },
}, {
    timestamps: true
});

const TotalJST = mongoose.model('TotalJST', TotalJSTSchema);

module.exports = TotalJST;
