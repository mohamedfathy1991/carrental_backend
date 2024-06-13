import { db } from "../../database/conection.js";
import { ObjectId } from "mongodb";

export const addCar = async (req, res) => {
  await db.collection("cars").insertOne(req.body);
  res.status(201).json({ message: "car add" });
};
export const getSpecificCar = async (req, res) => {
  let car = await db
    .collection("cars")
    .findOne({ _id: new ObjectId(req.params.id) });
  res.status(200).json({ car });
};
export const getAllCar = async (req, res) => {
  let { model1 } = req.query;
  let { model2 } = req.query;
  if (model1 || model2) {
    let cars = await db
      .collection("cars")
      .find({ $or: [{ model: model1 }, { model: model2 }] })
      .toArray();
    return res.status(200).json({ cars });
  }

  let cars = await db.collection("cars").find().toArray();
  res.status(200).json({ cars });
};
export const deleteCar = async (req, res) => {
  try {
    let cars = await db
      .collection("cars")
      .deleteOne({ _id: new ObjectId(req.params.id) });
    res.status(200).json({ message: "car deleted" });
  } catch (err) {
    res.status(500).json("err in server");
  }
};
export const updateCar = async (req, res) => {
  try {
    let cars = await db.collection("cars").updateOne(
      { _id: new ObjectId(req.params.id) },
      {
        $set: req.body,
      }
    );
    res.status(200).json({ message: "car updated" });
  } catch (err) {
    res.status(500).json("err in server");
  }
};
export const getAvilableCar = async (req, res) => {
  let { model1 } = req.query;
  let { model2 } = req.query;
  if (model1 || model2) {
    let cars = await db
      .collection("cars")
      .find({ 
            rentalstatus:"available",
        $or: [{ model: model1 }, { model: model2 }],
        
      })
      .toArray();
    return res.status(200).json({ cars });
  }

  let cars = await db.collection("cars").find({ rentalstatus: "available"}).toArray();
  res.status(200).json({ cars });
};

export const getRentedCar = async (req, res) => {
      
      if (req.query.model ) {
        let cars = await db
          .collection("cars")
          .find({ 
                rentalstatus:"rented",
             model: req.query.model ,
            
          })
          .toArray();
        return res.status(200).json({ cars });
      }
    
      let cars = await db.collection("cars").find({ rentalstatus: "rented"}).toArray();
      res.status(200).json({ cars });
    };


    export const getModelCar = async (req, res) => {
      
      if (req.query?.status){
            let cars = await db .collection("cars") .find({ 
                  model:req.params.model,
                     
                   rentalstatus: req.query.status,
                  
                })
                .toArray();
            
          
         return   res.status(200).json({ cars });

      }else{
            let cars = await db .collection("cars") .find({ 
                  model:req.params.model,
                     
              
                  
                })
                .toArray();
            
          
         return   res.status(200).json({ cars });

      }

       
    };
    

