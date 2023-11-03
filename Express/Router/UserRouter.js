const{addUser,findparticularUser,findUser,deleteUser,updateUser} = require('../Controller/UserController')
const express = require('express')
const photoUpload = require('../fileUpload')
const router = express()


router.post('/register', photoUpload.single('image'),addUser) 
// router.post('/find/:email',findparticularUser) //this is used for particular email of user
router.get('/find/:email',findparticularUser)  //this is used for update images
router.get('/findall',findUser)
router.delete('/delete/:email',deleteUser)
router.put('/update/:email',photoUpload.single('image'),updateUser)
module.exports = router