const { userModel } = require("../models/user");


const handleGetUser = async ( req,res ) => {
    const users = await userModel.find({});
    res.json({ "users" : users });
}

const handlePostUser = async ( req,res ) => {
    const {name , school , gender , standard , dob , phone , email , motherTongue , language , relation , father , mother , siblings } = req.body;
    
    try{
        const user1 = await userModel.create({
            name,
            school,
            gender,
            standard,
            dob,
            phone,
            email,
            motherTongue,
            language,
            relation,
            father,
            mother,
            siblings,
        });
        res.json({ "User":user1 });
    }
    catch( err )
    {
        res.json({ "error":err });
    }

   
}

module.exports = {
    handleGetUser,
    handlePostUser
}