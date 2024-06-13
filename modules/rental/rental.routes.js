import { Router } from "express";
import { addRentalCar, deletrentalcar, getAllRentalCart, getspecificrental, updateRentalCar } from "./rental.contrloer.js";
const rentalCar=Router()


rentalCar.route('/rental').post(addRentalCar).get(getAllRentalCart)


rentalCar.route('/rental/:id').get(getspecificrental).delete(deletrentalcar).put(updateRentalCar)




export default rentalCar