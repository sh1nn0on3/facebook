import express from "express"
import bodyParser from "body-parser"
import initWebRoutes from "./route/ath"
import connectDB from "./config/connectDB"
require('dotenv').config()

let app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

initWebRoutes(app)
connectDB()


let port = process.env.PORT || 8001

app.listen(port, () => {
    console.log("Server is running on the port : " + port)
})