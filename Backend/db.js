const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const UserSchema = new Schema({
    username : {type:String , unique : true},
    email :  {type:String , unique : true},
    password : String
})

const UserModel = mongoose.model("user",UserSchema)

module.exports ={
    UserModel
}