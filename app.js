import express from 'express'
import userRoute from './modules/users/users.routes.js'
import carRoute from './modules/cars/cars.routes.js'
import rentalCar from './modules/rental/rental.routes.js'
const app = express()
const port = 3000


app.use(express.json())
app.use(userRoute)
app.use(carRoute)
app.use(rentalCar)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))