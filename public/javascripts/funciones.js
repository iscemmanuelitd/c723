

sesion = localStorage.getItem("sesion")
establecerSesion = function(){var _s = JSON.parse(localStorage.getItem("sesion"));  var su = JSON.parse(_s.usuario);   sesion=JSON.stringify(_s);  $(".lbl_usu").html($("<h4>").html(su.nombre+" "+su.paterno+" "+su.materno).addClass("usuarioLogueado") )}
let $inicio = $("<div>").addClass("x")
let opc = [{texto:"Inicio",icono:"home"},{texto:"Clientes",icono:"clientes"},{texto:"Prestamos",icono:"prestamos"},{texto:"Informes",icono:"info"},{texto:"Acerca de",icono:"acerca"}]
estilo={"position":"fixed","left":"1px","top":"0","padding":"0px 1px","z-index":"0","opacity":"0.2"}
let login=null
$( document ).ready(function() {
    let $items = $("<div>").addClass("ah-tab-wrapper") 
    let $lista = $("<div>").addClass("ah-tab")
    let $contenido = $("<div>").addClass("ah-tab-content-wrapper")
    opc.forEach(o=>{$lista.append($("<a>").addClass("ah-tab-item").html(o.texto).append($("<img>").css(estilo).attr("src",`/images/white-24dp/2x/${o.icono}.png`)));
                    $contenido.append($("<div>").addClass("ah-tab-content").html($("<h2>").html(o.texto)));
                  })
    $($lista[0].childNodes[0]).attr('data-ah-tab-active', 'true')
    $($contenido[0].childNodes[0]).attr('data-ah-tab-active', 'true')
    $items.html($lista)
    $(".content").html($items).append($("<div>").addClass("lbl_usu").html("usuario").click(()=>{ alertify.notify(sesion,'custom',10) })).append($contenido)
                
    if(sesion==null){
          $("#loginForm").html($("<fieldset>")
            .html($("<div>").addClass("login").html($("<input>").attr({"id":"usuario","type":"text","placeholder":"Usuario","required":"true"})))
          .append($("<div>").addClass("login").html($("<input>").attr({"id":"contra","type":"password","placeholder":"Contraseña","required":"true"}))))
          
          login = alertify.genericDialog($('#loginForm')[0]).set({'selector':'input[type="text"]',frameless:false,"oncancel":function(){return true}});
          login.set("resizable",true).resizeTo("50%",240)
          $(".ajs-dialog").addClass("fondoForms p35")
    }else{     
      s=JSON.parse(sesion) 
      ss = JSON.parse(s.usuario)
      onAutenticar(ss.usuario,ss.contra,"storage")

      }
    
});





function onAutenticar(usuario,contra,viene=""){
  console.log(viene)
  $("#modal").removeClass("ocultar")
  $.get(`/users/autenticar/${usuario}/${contra}`)
    .done(json=>{
      if(json.estatus){
        localStorage.setItem("sesion",JSON.stringify(json.datos))
        alertify.notify(json.mensaje, 'success', 2, alertify.notify("Iniciando sesión","alert",5,establecerSesion())); 
      }else{
         alertify.notify(json.mensaje,'error',5) //,location.reload())
      }
      alertify.confirm().destroy();
      $("#modal").addClass("ocultar");
    })  
}




