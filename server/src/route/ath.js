import express from "express"
import homeController from "../controllers/homeController"
let router = express.Router();


let initWebRoutes = (app) => {
   
    //sign up API

    router.post("/sign-up",homeController.signUp)

   


   
    return app.use('/',router);
}
module.exports = initWebRoutes;