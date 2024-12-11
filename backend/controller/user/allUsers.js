const userModel = require("../../models/userModel")

async function allUsers(req, res) {
    try {
        console.log("userid all User", req.userId)

        const allUsers = await userModel.find()

        res.json({
            message : "Tất cả người dùng",
            data : allUsers,
            success : true,
            error : false
        })
        
    } catch (err) {
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })       
    }
    
}

module.exports = allUsers