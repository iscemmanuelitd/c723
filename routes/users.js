var express = require('express'); 
 var router = express.Router(); 
 const mongoClient  = require('mongodb').MongoClient 
require("dotenv").config()
 const msgError = {estatus:false,mensaje:"Fallo la conexion a la BD o el servidor de Servicios Web se encuentra apagado"} 
 let client=null 
 /*  SistemaControlClientes       phNFEFlBguEoMdqb   */ 
  
/*
 router.use(function (err, req, res, next) {
      const ip = res.socket.remoteAddress
      res.send(`Hello World ${ip}`);
      next(ip);
    })

    // requests will never reach this route
router.use('/autenticar/:usuario/:contra', function (err,req, res,next) {
      req.set("Sec-Fetch-Mode","no-cors")
      res.send('Welcome');
      next()
})
*/



 router.get('/autenticar/:usuario/:contra/', async function(req, res, next){ 
      res.set("Sec-Fetch-Mode","no-cors")
       let _data = req.params
       try{ 
            
            _data["estatus"]=true
            client  = await mongoClient.connect(process.env.URL_DB)
             var _db = client.db("db723") 
             var col = _db.collection("usuarios") 
             let r = await col.findOne(_data) 
                      
             
             
             if(r._id == undefined) {res.json({estatus:false,mensaje:"El usuario o la contraseña no coinciden con ningúno de nuestros usuarios Verifique sus datos o comuníquese con el administrador del sistema"}) }
             else {  
                  console.log(r.nombre)
                  var  _col = _db.collection("sesiones");
                  
                  let f = await _col.findOne({"usuario._id":r._id,estado:true})
                  console.log(f)
                  let r2 = f == null ? await _col.insertOne({usuario:JSON.stringify(r),inicio:Date(),estado:true,duracion:0}) :  f
                  i = r2.insertedId == undefined ? r2._id:r2.insertedId
                  let datos = await _col.findOne({_id:i}) 
                  res.json({estatus:true,datos:datos,mensaje:`Usuarios identificado satisfactoriamente.`})
            } 
       }catch(err){ 
             res.json(msgError) 
       } 
 }) 
  

 router.post('/nuevo', async function(req, res, next){ 
      let _data = req.body 

      try{ 
            console.log(_data) 
            client  = await mongoClient.connect(process.env.URL_DB)
            var _db = client.db("db723") 
            var col = _db.collection("usuarios") 
            _data['_id'] = await col.countDocuments()+1 
            let r = await col.insertOne(_data) 
            res.json({estatus:true,mensaje:"Cliente agregado satisfactoriamente<BR>"+JSON.stringify(r)}) 
      }catch(errMsg){ 
            console.log(errMsg) 
            res.json(msgError) 
      } 
}) 
 
  
  
 module.exports = router;