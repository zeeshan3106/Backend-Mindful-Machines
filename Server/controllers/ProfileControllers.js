import ProfileModel from "../models/Profile.js"
import signupmodel from "../models/signup.js"



export async function ProfileControler(req, res){


    try{

        const {Name,Email, Mobile,Whatsapp,Country,State,City,PostalCode} = req.body

        const ProfileData = new ProfileModel({

            Name,Email, Mobile,Whatsapp,Country,State,City,PostalCode

        })


        await ProfileData.save()

        return res.status(200).json({


            error:false,
            success:true,
            message:"You Finally did it properly!"


        })









    }
    catch{

        return res.status(500).json({

            success:false,
            error:true,
            message:message.error || error

        })



    }




}


export async function ProfileGet(req, res){

    try{


const Useremail = req.jwtpayload.email


 const Profiles = await ProfileModel.find({Email: req.jwtpayload.email});

 
        if(!Profiles){

            return res.status(100).json({

                error:false,
                sucess:true,
                message:"No Single USer Avaiable"
            })
        }

       


        return res.status(200).json({
            error:false,
            success:true,
            data:Profiles,
            message:"All Profiles are There..."
      
        })


    }
    catch{



    }
}