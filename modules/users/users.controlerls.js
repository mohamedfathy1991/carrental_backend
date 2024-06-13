import { compareSync, hashSync } from "bcrypt"
import { db } from "../../database/conection.js"
import { ObjectId } from "mongodb"



export const signUp=async(req,res)=>{
      req.body.password= hashSync(req.body.password,8) 
      await db.collection('users').insertOne(req.body)

      res.json({message:"sucess"})
}
export const signIn=async(req,res)=>{
     let user= await db.collection('users').findOne({email:req.body.email})
      let checkpassword=compareSync(req.body.password,user.password)
      if(checkpassword){
            return res.status(200).json({message:"success"})
      } else{
            return res.status(409).json({message:"password incorrect"})
      }
     

      
}
export const getspecificUser=async(req,res)=>{
      let {email}= req.params
      console.log(email)
      let users=  await db.collection('users').findOne({email},{ projection: { password: 0} })
         res.status(200).json(users)
      
 
       
 }
export const getAllUsers=async(req,res)=>{
      let users=  await db.collection('users').find({},{ projection: { password: 0} }).toArray()
         res.status(200).json(users)
      
 
       
 }
export const updateUser=async(req,res)=>{
      if (req.body.id==req.params.id){
            let users=   await db.collection('users').updateOne({_id: new ObjectId(req.params.id)},
           {$set : req.body})
            res.status(200).json({message:"updated"})
                            

      }else{
            res.status(409).json({message:"not authorized"})
      }
     
      
 
       
 }
 export const deletUser=async(req,res)=>{
      if (req.body.id==req.params.id){
            let users=   await db.collection('users').deleteOne({_id: new ObjectId(req.params.id)},
           )
            res.status(200).json({message:"deleted"})
                            

      }else{
            res.status(409).json({message:"not authorized"})
      }
     
      
 
       
 }