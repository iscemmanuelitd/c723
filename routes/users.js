var express = require('express'); 
 var router = express.Router(); 
 const mongoClient  = require('mongodb').MongoClient 
 const msgError = {estatus:false,mensaje:"Fallo la conexion a la BD o el servidor de Servicios Web se encuentra apagado"} 
 let client=null 
 /*  SistemaControlClientes       phNFEFlBguEoMdqb   */ 
  
 router.get('/autenticar/:usuario/:contra', async function(req, res, next){ 
       let _data = req.params
       try{ 
            _data["estatus"]=true
            client  = await mongoClient.connect('mongodb+srv://SistemaControlClientes:phNFEFlBguEoMdqb@cluster0.82r1d65.mongodb.net/')
             var _db = client.db("db723") 
             var col = _db.collection("usuarios") 
             let r = await col.findOne(_data) 
             console.log(r)             
             
             
             if(r._id === undefined) {res.json({estatus:false,mensaje:"El usuario o la contraseña no coinciden con ningúno de nuestros usuarios Verifique sus datos o comuníquese con el administrador del sistema"}) }
             else {  
                  var  _col = _db.collection("sesiones");
                  let f = await _col.findOne({"usuario._id":r._id,estado:true})
                  console.log(f)
                  let r2 = f._id ==undefined ? await _col.insertOne({usuario:r,inicio:Date(),estado:true,duracion:0}).insertedId :  f._id
                  let datos = await _col.findOne({_id:r2}) 
                  res.json({estatus:true,datos:datos,mensaje:`Usuarios identificado satisfactoriamente.`})
            } 
       }catch(err){ 
             res.json(msgError) 
       } 
 }) 
  

 router.post('/nuevo', async function(req, res, next){ 
      let _data = req.query 
      try{ 
            console.log(_data) 
            var _db = client.db("db723") 
            var col = _db.collection("usuarios") 
            _data['_id'] = await col.countDocuments()+1 
            let r = await col.insertOne(_data) 
            res.json({estatus:true,mensaje:"Cliente agregado satisfactoriamente"}) 
      }catch(errMsg){ 
            console.log(errMsg) 
            res.json(msgError) 
      } 
}) 
 
  
  
 module.exports = router;