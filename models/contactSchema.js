const mongoose = require('mongoose')

const contactSchema = mongoose.Schema(
    {
        name : { type:String , required:true} ,
        age : Number ,
        favoriteFoods : Array ,
    }

)

const Contact = mongoose.model('Contact' , contactSchema)
exports.module = Contact
