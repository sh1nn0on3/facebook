import jwt from "jsonwebtoken"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import db from "../models/index"
import userHandler from "../services/userHandler"

let signUp = async (req,res) => {
    let message = await userHandler.register(req.body)
    let key = process.env.SECRET_KEY
    if(message){
        let accessToken = jwt.verify({ email : req.body.email},key)
        res.cookie(token,accessToken,{ maxAge: 900000, httpOnly: true })
        console.log("New user created")
    }
}

let signIn = async (req,res) => {
    return new Promise(async (resolve,reject) => {
        try{
            let isSuccess = await userHandler.auth(req.body)
            if(isSuccess){
                let key = process.env.SECRET_KEY
                let token = await jwt.sign({ email: req.body.email},key)
                res.cookie(accessToken,token,{ maxAge: 900000, httpOnly: true })
                res.send("Logged in successfully")
            }
        }catch(e){
            reject(e)
        }
    })
    
}

module.exports = {
    signUp : signUp,
}

