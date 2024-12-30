const { examModel } = require("../models/exam");


const handleGetExam = async (req,res) => {

    try{
        const allExams = await examModel.find({});
        res.json({ "All Exams ": allExams });
    }
    catch(err){
        res.json({ "error":err });
    }
}

const handlePostExam = async(req,res) => {

    const { category , answers , totalCorrectAnswers , screeningTestMarks , user } = req.body;

    const parsedAnswers = typeof answers === 'string' ? JSON.parse(answers) : answers;

    try{
        const newExam = await examModel.create({
            user,
            category,
            answers: parsedAnswers,
            totalCorrectAnswers: Number(totalCorrectAnswers),
            screeningTestMarks: Number(screeningTestMarks),
        });

        res.json({ "Success : ": newExam });
    }
    catch(err){
        res.json({ "error" : err });
    }

}

module.exports = {
    handleGetExam,
    handlePostExam,
}