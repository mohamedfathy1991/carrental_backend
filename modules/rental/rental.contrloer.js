import { db } from "../../database/conection.js"
import { ObjectId } from "mongodb"


export const  addRentalCar=async(req,res)=>{
    let checkstatus=  await db.collection('cars').findOne({_id: new ObjectId(req.body.carid),rentalstatus:"available"})
     
    if(checkstatus){
      await db.collection('rentals').insertOne(req.body)
      res.status(201).json({message:"car rented"})

    }else{
      res.status(406).json({message:'sory car not avilable'})
    }
  

}
export const  updateRentalCar=async(req,res)=>{
    try{
      await db.collection('rentals').updateOne({_id:new ObjectId(req.params.id)},{
            $set:req.body
      })
      res.status(201).json({message:"updated"})

    }catch(err){
      res.status(500).json({message:"err in server"})
    }

}
export const deletrentalcar=async(req,res)=>{
    try{
            let users=   await db.collection('rentals').deleteOne({_id: new ObjectId(req.params.id)},
           )
            res.status(200).json({message:"deleted"})
                            

      }catch(err){
            res.status(500).json({message:"err in server"})
      }
     
      
 
       
 }
 export const getspecificrental=async(req,res)=>{
     
      let rental=  await db.collection('rentals').findOne({_id:new ObjectId(req.params.id)})
         res.status(200).json(rental)
      
 
       
 }
export const getAllRentalCart=async(req,res)=>{
      let rentals=  await db.collection('rentals').find().toArray()
         res.status(200).json(rentals)
      
 
       
 }