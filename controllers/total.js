const TotalJST  = require("../models/TotalJST");

const handleTotalGet = async (req, res) => {
    try {
        const data = await TotalJST.findOne({});
        if (!data) {
            return res.status(404).json({ message: "No data found" });
        }
        res.json({ total: data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    handleTotalGet
}