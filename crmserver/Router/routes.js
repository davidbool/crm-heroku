const express = require('express')
const router = express.Router()
const Client = require('../Moduels/ClientSchema')

router.get('/clients',function(req,res){
    Client.find({},function(err, data){
        res.send(data)
    })
})

router.post(`/update`,function(req,res){
   let data = req.body
    Client.findById(data._id, function(err, doc){
        for(let p in data){
            doc[p] = data[p]
        }
        doc.save(function(err){res.end()})
        
    })
})
const generateId = function(){
    let length = 24,
    charset = "abcdefghijklmnopqrstuvwxyz0123456789",
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n))
    }
    return retVal
  }

router.put(`/addClient`,function(req,res){
    let data = req.body.client
    let JoinDate = new Date()
    const client = new Client({
        _id: generateId(),
        name: data.name,
        email: null,
        firstContact: JoinDate,
        emailType: null,
        sold: false,
        country: data.country,
        owner: data.owner,
    })
    client.save(function(err){res.send(err)})
})
module.exports = router