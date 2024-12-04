const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs')


async function userSignUpController(req,res) {
    try {
        const {email, password, name} = req.body

        const user = await userModel.findOne({email})

        console.log("user", user)
        if(user) {
            throw new Error("Người dùng đã thoát.")
        }
        if(!email){
            throw new Error("Vui lòng nhập email")
        }
        if(!password){
            throw new Error("Vui lòng nhập password")
        }
        if(!name){
            throw new Error("Vui lòng nhập tên")
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Có gì đó không ổn")
        }

        const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }

        
        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            massage: "User đã được tạo thành công"
        })
    } catch (err) {
        res.json({
            message : err.message || err,
            error : true,
            success : false,
        
        })
        
    }
    
}

module.exports = userSignUpController