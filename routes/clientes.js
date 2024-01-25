var express = require('express');
var router = express.Router();
const msgError = {estatus:false,mensaje:"Fallo la conexion a la BD o el servidor de Servicios Web se encuentra apagado"}
/*  SistemaControlClientes       phNFEFlBguEoMdqb   */

router.post('/newID',async function(req, res, next) {
        try{
            res.send(await db.get("clientes").countDocuments()+1);
        }catch(err){
            console.log(err)
            res.send(0);
        }
});

router.post('/nuevo', async function(req, res, next){
      let _data = req.query
      try{
            _data['_id'] = await db.get("clientes").countDocuments()+1
            let r = await db.clientes.insertOne(_data)
            res.send({estatus:true,mensaje:"Cliente agregado satisfactoriamente"})
      }catch(errMsg){
            console.log(errMsg)
            res.send(msgError)
      }
})


router.get('/buscar/:nombre', async function(req, res, next){
      let _data = req.params
      console.log(app.get("conn"))
      //const db = await DB.db
      try{
            let r = await db.clientes.findOne(_data)
            c= r.toArray().length
            if(c>0) res.send({estatus:true,datos:r,mensaje:`Se encontraron ${c} coincidencias con su busqueda`})
            else res.send({estatus:false,mensaje:"Cliente no encontrado."})
      }catch(err){
            console.log(err)
            res.send(msgError)
      }
})



module.exports = router;