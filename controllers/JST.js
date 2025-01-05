const JST = require("../models/JST");
const TotalJST = require("../models/TotalJST");
const calculateStats = require("../Helper/CalculateStats");

const handleGetJST = async(req,res) => {
    try{
        const exam_details = await JST.find({});
        res.json({ "exam": exam_details });
    }
    catch(err)
    {
        res.json({ "error": err });
    }
}

const handlePostJST = async (req, res) => {
    try {
        const {
            userID,
            behaviour,
            communication,
            motorCoordination,
            numberConcepts,
            readingAndWriting,
            soundAwareness,
            Fluency,
            letterWriting,
            Listening,
            phonemeReplacement,
            rhymeTest,
            wordReading,
            wordWriting,
            letterReading,
            pictureNaming,
        } = req.body;

        // Create a new exam
        const exam = await JST.create({
            user: userID,
            behaviour,
            communication,
            motorCoordination,
            numberConcepts,
            readingAndWriting,
            soundAwareness,
            Fluency,
            letterWriting,
            Listening,
            phonemeReplacement,
            rhymeTest,
            wordReading,
            wordWriting,
            letterReading,
            pictureNaming,
        });

        // Retrieve or create TotalJST
        let total = await TotalJST.findOne({});
        if (!total) {
            total = new TotalJST();
        }

        // Categories to update
        const categories = [
            'Fluency',
            'letterWriting',
            'Listening',
            'phonemeReplacement',
            'rhymeTest',
            'wordReading',
            'wordWriting',
            'letterReading',
            'pictureNaming',
        ];

        // Update each category
        for (const category of categories) {
            if (req.body[category] !== undefined) {
                // Push score and calculate stats
                total[category] = [...total[category], req.body[category]];
                const { total: totalScore, mean, median, stdDev, cutoff } = calculateStats(total[category]);

                // Update stats
                total[`${category}Total`] = totalScore;
                total[`${category}Mean`] = mean;
                total[`${category}Median`] = median;
                total[`${category}SD`] = stdDev;
                total[`${category}Cutoff`] = cutoff;
            }
        }

        // Save updated stats
        await total.save();

        res.json({ success: exam });
    } catch (err) {
        res.json({ error: err.message });
    }
};


module.exports = {
    handleGetJST,
    handlePostJST,
}