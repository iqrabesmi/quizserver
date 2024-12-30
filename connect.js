const mongoose = require('mongoose');


const makeConnection  = async () => {
    return await mongoose.connect(`mongodb+srv://IQRA:${process.env.dbpass}@cluster0.atrsi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
}

module.exports = {
    makeConnection,
}