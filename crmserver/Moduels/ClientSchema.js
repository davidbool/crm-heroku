const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Clients', { useNewUrlParser: true } )
 
const  ClientSchema = new Schema({
    _id: String,
    name: String,
    email: String,
    firstContact: Date,
    emailType: String,
    sold: Boolean,
    owner: String,
    country: String
})

const Client = mongoose.model(`clients`, ClientSchema)
module.exports = Client

// data = 
// for(let d of data){
//     let c = new Client(d)
//     c.save()
// }