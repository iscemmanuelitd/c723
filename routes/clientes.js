var express = require('express');
var router = express.Router();
const mongo  = require('mongodb').MongoClient

/*  SistemaControlClientes       phNFEFlBguEoMdqb   */
router.post('/newID',async function(req, res, next) {
        const client = await mongo.connect('mongodb+srv://SistemaControlClientes:phNFEFlBguEoMdqb@cluster0.82r1d65.mongodb.net/');
        var coll = client.db('db723').collection('clientes')
        var r =  await coll.countDocuments()
        console.log(r)
        res.send({seccion:'Nuevo Cliente',newID:r+1},);
});



module.exports = router;