import FeedModel from "../models/Feedback.js"


export async function FeedController(req, res){
try{
        
    const {Name, Email, Message}=req.body


    const Feedback = new FeedModel({
    userId,  
        Name, Email, Message


    })
    await Feedback.save();

    return res.status(200).json({
        error:false,
        success:true,
        message:"3rd Done!"
    })



}
catch(error){

    return res.status(500).json({
        error:true,
        success:false,
        message:error.message || error
    })


}


}



export async function Feedbacks(req,res){

    try{

        const limit = 20
        const pages = 1
        const skip = (pages-1)*limit
      

        const Feeds = await FeedModel.find().skip(skip).limit(limit)
        const FeedbackCount = await FeedModel.countDocuments();
    if(!Feeds){
        return res.status(100).json({
            error:false,
            success:true,
            message:"No User in database"
        })
    }


    return res.status(200).json({


        success:true,
        error:false,
        
        messsage:"All Feddbacks are here and thier timings as well",
data:Feeds,
FeedbackCount
    })





    }
    catch(error){

        return res.status(500).json({

            error:true,
            success:false,
            message:error.message || error
        })
    }




}