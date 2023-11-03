//importing model
const userModel = require('../Model/UserModel')

//async await syntax

//async function addUser(req,res){

//}



//Insert method
const addUser = async (req, res) => {
    try {
        const { fname, lname, age, city, email } = req.body
        const userData = new userModel({
            fname,
            lname,
            age,
            city,
            email,
            image:req.file.filename
        })
        const data = await userData.save()
        res.status(200).send({ msg: "Data inserted Successfully", data })
    } catch (err) {
        res.status(400).send(err)
    }
}


// Find Method

const findparticularUser = async (req, res) => {
    try {
        // const userData = await userModel.findOne({ email: req.body.email })
        const userData = await userModel.findOne({ email: req.params.email }) //we cannot pass any function in body so we can use here body 
        if (userData != null) {
            res.status(200).send({ userData })
        }
        else {
            res.status(400).send({ msg: "the user doesn't exist" })
        }
    }
    catch (err) {
        res.status(500).send(err)
    }
}

//findUser
const findUser = async (req, res) => {
    try {
        const userData = await userModel.find()
        res.status(200).send({ userData })
    } catch (err) {
        res.status(500).send(err)
    }
}

//delete Method
async function deleteUser(req, res) {
    try {
        const data = await userModel.deleteOne({ email: req.params.email })
        res.status(200).send({ msg: "User database successfully" })

    } catch (err) {
        res.status(500).send(err)
    }
}


//Update Method
async function updateUser(req, res) {
    try {
        const { email } = req.params
        const { fname, lname, city, age } = req.body
        const data = await userModel.updateOne(
            { email }, { $set: { fname, lname, city, age,image:req.file.filename } }
        )
        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "User data updated" })
        }else {
            res.status(400).send({ msg: "you wont update any data" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}
module.exports = { addUser, findparticularUser, findUser, deleteUser, updateUser }