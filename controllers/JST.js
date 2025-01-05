const JST = require("../models/JST")

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

const handlePostJST = async(req,res) => {

    try{
        const { userID , 
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
                pictureNaming } = req.body;
        
        const exam = await JST.create({
                user: userID , 
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
                pictureNaming
        });

        res.json({ "success" : exam });
    }
    catch(err)
    {
        res.json({ "error":err });
    }
}

module.exports = {
    handleGetJST,
    handlePostJST,
}