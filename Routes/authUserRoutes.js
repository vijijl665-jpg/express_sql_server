import express from 'express'
import { protect } from '../middlware/protect'
import { isAdmin } from '../Middlware/admin'
import { userSignup, login } from '../Controller/authUserController.js';

const authUserRoute = express.Router()

authUserRoute.post('/au')
authUserRoute.post('/au')

authUserRoute.get("/profile",protect, (req, res) => {
    res.json({message:"protected profile",user: req.role})

})
authUserRoute.get('/admin', protect , isAdmin,(req, res) => {
    res.json({ message: "Welcome admin user", user: req.role})
})
export default authUserRoute