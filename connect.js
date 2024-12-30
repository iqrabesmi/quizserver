const mongoose = require('mongoose');


const makeConnection  = async (db_name) => {
    return await mongoose.connect('mongodb://127.0.0.1:27017/DALI');
}

module.exports = {
    makeConnection,
}