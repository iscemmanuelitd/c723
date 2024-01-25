var express = require('express');
var router = express.Router();
const mongo  = require('mongodb').MongoClient
let client = null 

/*  SistemaControlClientes       phNFEFlBguEoMdqb   */
router.post('/newID',async function(req, res, next) {
         client = await mongo.connect('mongodb+srv://SistemaControlClientes:phNFEFlBguEoMdqb@cluster0.82r1d65.mongodb.net/');
        var coll = client.db('db723').collection('clientes')
        var r =  await coll.countDocuments()
        console.log(r)
        res.send({seccion:'Nuevo Cliente',newID:r+1},);
});



router.post('/nuevo', async function(req, res, next){
      let coll = await client.db('db723').collection('clientes')
      let _data = req.body
      _data['_id'] = await coll.countDocuments()+1
      let r = coll.insertOne(_data)
      res.send({estatus:true,mensaje:r})
})

module.exports = router;