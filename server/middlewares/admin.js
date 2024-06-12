import { User } from "../models"
import CustomErrorHandler from "../services/CustomeErrorHandler";

const admin = async (req,res,next) =>{
    try {
        const user = await User.findOne({ _id: req.user._id });

        if(user.role === "admin"){
            next(); 
        }else{
            return next(CustomErrorHandler.unAuthorized("No admin user!"));
        }
    } catch (error) {
        return next(CustomErrorHandler.serverError());

    }
}

export default admin;