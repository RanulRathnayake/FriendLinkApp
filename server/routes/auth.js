const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs') //password hashing 
/*
router.get('/',(req,res)=>{
    res.send("hello")
})
*/

router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!email || !password || !name){
       return res.status(422).json({error:"please add all the field"})
    }
    /* res.json({message:"successfully post it"})
    console.log(req.body.name) 
    console.log(req.body.password)
    console.log(req.body.email) */
    User.findOne({email:email})
    .then((savedUser) => {
        if(savedUser){
            return res.status(422).json({error:"user allready exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                name
            })
            user.save()
            .then(user=>{
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            }) 
        })
        
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"please add eamil or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"invalid add eamil or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                res.json({message:"successfuly signed in"})
            }
            else{
                return res.status(422).json({error:"invalid add eamil or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

module.exports = router
