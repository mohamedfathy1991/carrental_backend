import { MongoClient } from "mongodb";


 


const client = new MongoClient('mongodb://localhost:27017')
 client.connect().then(()=>{
      console.log("connect to db .....");
 }).catch((err)=>console.log(" err in db" + err))
 
export const db = client.db('assignment7');