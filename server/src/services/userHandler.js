import db from "../models/index"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
// firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     dateOfBirth:  DataTypes.DATE,
//     monthOfBirth:  DataTypes.DATE,
//     yearOfBirth:  DataTypes.DATE,
//     sex: DataTypes.BOOLEAN

let register = async (data) => {
    return new Promise(async (resolve, reject) => {
        const salt = bcrypt.genSaltSync(10);
        try{
            let hashPassword = await bcrypt.hashSync(data.password, salt);
            await db.User.create({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: hashPassword,
            dateOfBirth: data.dateOfBirth,
            monthOfBirth: data.monthOfBirth,
            yearOfBirth: data.yearOfBirth
        }    
        )
            resolve(1)
        }catch(e){
            reject(e)
        }         
    })
}


let auth = (data) => {
    return new Promise(async (resolve,reject) => {
        try{
            if(data.email||data.password){
                resolve("Login failed")
            }else {
               let user = await db.User.findOne({
                    where : { email : data.email }
                })
                if(user){
                    const salt = bcrypt.genSaltSync(10);
                    let hashPassword = await bcrypt.hashSync(data.password, salt);
                    if(hashPassword === user.password){
                        resolve("Logged in successfully")
                    }

                }
            }

        }catch(e){
            reject(e)
        }
    })
}

module.exports = {
    register : register,
    auth : auth
}