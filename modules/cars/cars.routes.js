import { Router } from "express";
import { addCar, deleteCar, getAllCar, getAvilableCar, getModelCar, getRentedCar, getSpecificCar, updateCar } from "./cars.contrler.js";

 const carRoute=Router()


 carRoute.post('/car',addCar)
 carRoute.get('/carall',getAllCar)
 carRoute.route('/car/:id').get(getSpecificCar).put(updateCar).delete(deleteCar)
//  specila api

carRoute.get('/carall/available',getAvilableCar)
// rented or specific model
carRoute.get('/carall/rented',getRentedCar)
// model car with available or rented
carRoute.get('/carall/:model',getModelCar)



 export default carRoute