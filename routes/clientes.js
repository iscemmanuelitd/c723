var express = require('express');
var router = express.Router();
const mongoClient  = require('mongodb').MongoClient
require("dotenv").config()
const msgError = {estatus:false,mensaje:"Fallo la conexion a la BD o el servidor de Servicios Web se encuentra apagado"}
let client=null
/*  SistemaControlClientes       phNFEFlBguEoMdqb   */


router.post('/newID',async function(req, res, next) {
        try{
            client = await mongoClient.connect(process.env.URL_DB)
            var _db = client.db("db723")
            var col = _db.collection("clientes")
            var r = await col.countDocuments()+1
            res.send({estatus:true,datos:r});
        }catch(err){
            res.send({estatus:true,datos:err});
        }
});

router.post('/nuevo', async function(req, res, next){
      let _data = req.body
      try{
            _data.domicilio = JSON.parse(_data.domicilio)
            _data.personales = JSON.parse(_data.personales)
            client = await mongoClient.connect(process.env.URL_DB)
            var _db = client.db("db723")
            var col = _db.collection("clientes")
            _data['_id'] = await col.countDocuments()+1
            let r = await col.insertOne(_data)
            res.send({estatus:true,mensaje:"Cliente agregado satisfactoriamente"})
      }catch(errMsg){
            console.log(errMsg)
            res.send(msgError)
      }
})


router.get('/buscar/:nombre', async function(req, res, next){
      let _data = req.params
      try{
            var _db = client.db("db723")
            var col = _db.collection("clientes")
            let r = await col.find(_data)
            console.log(r._id)            
            if(r._id === undefined) res.send({estatus:false,mensaje:"Cliente no encontrado."})   
            else res.send({estatus:true,datos:r,mensaje:`Se encontraron coincidencias con su busqueda`})
      }catch(err){
            console.log(err)
            res.send(msgError)
      }
})



module.exports = router;