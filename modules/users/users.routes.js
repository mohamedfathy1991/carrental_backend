import { Router } from "express";
import { db } from "../../database/conection.js";
import { checkemailSingIn, checkemailSingUP } from "../../midleware/checkEmial.js";
import {hashSync} from 'bcrypt'
import { deletUser, getAllUsers, getspecificUser, signIn, signUp, updateUser } from "./users.controlerls.js";


const userRoute= Router()


userRoute.post('/user',checkemailSingUP,signUp)
userRoute.post('/user/signin',checkemailSingIn,signIn)
userRoute.get('/user',getAllUsers)
userRoute.get('/user/:email',getspecificUser)
userRoute.put('/user/:id',updateUser)
userRoute.delete('/user/:id',deletUser)

export default userRoute