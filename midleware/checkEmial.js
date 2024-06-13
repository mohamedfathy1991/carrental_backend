import { db } from "../database/conection.js"


export const checkemailSingUP= async(req,res,next)=>{
     let email= await db.collection('users').findOne({email:req.body.email})
     console.log(email)
if (email){
      
      return res.status(407).json("email is used")


}else{
      next()
}

}
export const checkemailSingIn= async(req,res,next)=>{
      let email= await db.collection('users').findOne({email:req.body.email})
 if (email){
      next()
       
      
 
 
 }else{
      return res.status(407).json("email not found")
 }
 
 }