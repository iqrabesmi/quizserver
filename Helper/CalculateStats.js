const { mean, median, std } = require('mathjs'); // Use mathjs for median and std calculations

// Calculate total, mean, median, and standard deviation
const calculateStats = (scores) => {
    const total = scores.reduce((acc, score) => acc + score, 0);
    const meanScore = mean(scores);
    const medianScore = median(scores);
    const stdDev = std(scores);
    return { total, mean: meanScore, median: medianScore, stdDev , cutoff: stdDev-(1.5*meanScore) };
};


module.exports = {
    calculateStats,
}