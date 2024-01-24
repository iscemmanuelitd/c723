var express = require('express');
var formidable = require("formidable")
var fs = require("fs")
const { exec } = require('child_process');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  let cliente = "0001"
  var form = new formidable.IncomingForm();
 
  form.parse(req, function (err, fields, files) {
    let a = files.misFiles
    a.forEach(e=>{console.log(e.filepath+" "+e.newFilename+" "+e.originalFilename)})


/*
    var oldpath = files.misFiles[0].filepath;
    var newFile =  files.misFiles[0].newFilename
    exec(`mkdir uploadFile\\INE\\${cliente}`)
    
    var newpath = `uploadFile\\INE\\${newFile}\\` + files.misFiles[0].originalFilename;
    fs.rename(oldpath, newpath, function (err) {
      if (err) res.write({estatus:false,mensaje:`Ocurrio un erro al subir la imagen: ${err}`})
      else res.write({estatus:true,mensaje:`La imagen se guardo correctamente`});
      res.end();
    });
*/
  })
});
module.exports = router;