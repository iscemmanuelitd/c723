var d=null
let conte=$("<div><div><div><div><div></div>")
conte.addClass("consulCli")
$(".consulCLi").html("Texto de prueba nomas para llenar esta madre sin tanto esfuerxzo, checaquen mi codigo <BR>")

function _sec(_i){
    let $divTot = $("<div>");
      
            switch(parseInt(_i)){
                case 0:return "Inicio";
                case 1:  let opc=[{i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/newuser.jpg"}).addClass("cover-image")),
                                i2:$("<div>").addClass("title new"),
                                i3:$("<img>").attr({"src":"/images/new4.png"}).addClass("character"),
                                _dat:{id:"nuevoCli",t:"Nuevo Cliente",c:$nuevoCli,w:"80%",h:"60%"}
                                //$_dat:[$nuevoCli,`<h2>Nuevo Cliente</h2>`,"65%","60%"]
                                },
                                {i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/actualizar.png"}).addClass("cover-image")),
                                i2:$("<div>").addClass("title upd"),
                                i3:$("<img>").attr({"src":"/images/act1.png"}).addClass("character"),
                                _dat:{id:"actualizaCli",t:"Actualizar Clientes",c:$mapa,w:"50%",h:"20%"}
                                //$_dat:[$mapa,"<h2>Ubicar domicilio</h2>","50%","50%"]
                                },
                                {i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/consultar.png"}).addClass("cover-image")),
                                i2:$("<div>").addClass("title selec"),
                                i3:$("<img>").attr({"src":"/images/informe.png"}).addClass("character"),
                                _dat:{id:"muestraCli",t:"Consultar Clientes",c:conte,w:"50%",h:"20%"}
                                
                                }
                                ];
                        opc.forEach(o=>{   
                            $divTot.append($("<div>").addClass("opcCli").html($("<div>").addClass("card").html(o.i1).append(o.i2).append(o.i3)).click(()=>{ alertas(o._dat)}) )
                        })
                        break;
                default: break;       
            } 
          
    return $divTot;
}





function alertas(d){
   // onApiLoad("./javascripts/alertas.js")
    alertify.confirm().set({title:d.t,'resizable':true,onok:function(e){alertify.success('Inicio de sesion')},oncancel:function(){ alertify.error('Cancel') },onclosing:function(){  alertify.message('prompt is about to close.')}}).setContent($(d.c).html()).resizeTo(d.w,d.h).show()
    window.showConfirm(d.id);
    ajusteAle(d.id)
}



$(document).ready(function() {  
    $('.ah-tab-wrapper').horizontalmenu({
        itemClick : function(item) {
            secc = item[0].childNodes[0].data
            _idx = $(item).index() 
            console.log()
            $('.ah-tab-content-wrapper .ah-tab-content').css("height","none").removeAttr('data-ah-tab-active');
            $('.ah-tab-content-wrapper .ah-tab-content:eq(' + _idx + ')').attr('data-ah-tab-active', 'true').css({"height":($(document).height()-200)+"px"})
            .html(_sec(_idx))
            return false;   //if this finction return true then will be executed http request
        }
    })
})


