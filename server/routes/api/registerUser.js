const express = require('express')
const route = express.Router()
const registerUser = require('../../models/registerUserModel')

route.post('/register_user', async(req,res) =>{
    
    try{
        const data = req.body
        const newUser = new registerUser(req.body)
        await newUser.save()
        res.send({
            message: 'User Registered!',
            newUser})
         
        }
    catch(err){
        res.send({msg: err})
    }
})

module.exports = route
