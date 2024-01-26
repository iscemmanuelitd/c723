var express = require('express'); 
 var router = express.Router(); 
 const mongoClient  = require('mongodb').MongoClient 
 const msgError = {estatus:false,mensaje:"Fallo la conexion a la BD o el servidor de Servicios Web se encuentra apagado"} 
 let client=null 
 /*  SistemaControlClientes       phNFEFlBguEoMdqb   */ 
  
  
 

router.post('/sesionInit',async function(req, res, next) { 
         try{ 
             client = await mongoClient.connect('mongodb+srv://SistemaControlClientes:phNFEFlBguEoMdqb@cluster0.82r1d65.mongodb.net/') 
             var _db = client.db("db723") 
             var col = _db.collection("sesiones") 
             var r = await col.insertOne(req.query)
             res.send({estatus:true,datos:r}); 
         }catch(err){ 
             res.send({estatus:true,datos:err}); 
         }

  
 router.post('/nuevo', async function(req, res, next){ 
       let _data = req.query 
       try{ 
             console.log(_data) 
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
  
  
 router.post('/autenticar', async function(req, res, next){ 
       let _data = req.query
       try{ 
             var _db = client.db("db723") 
             var col = _db.collection("usuarios") 
             let r = await col.findOne(_data) 
             console.log(r._id)             
             if(r._id === undefined) res.send({estatus:false,mensaje:"El usuario o la contraseña no coinciden con ningúno de nuestros usuarios Verifique sus datos o comuníquese con el administrador del sistema"})    
             else res.send({estatus:true,datos:r,mensaje:`Usuarios identificado satisfactoriamente.`}) 
       }catch(err){ 
             console.log(err) 
             res.send(msgError) 
       } 
 }) 
  
  
  
 module.exports = router;