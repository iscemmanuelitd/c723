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
                                _dat:{id:"new",t:"Nuevo Cliente",c:$nuevoCli,w:"80%",h:"60%"}
                                //$_dat:[$nuevoCli,`<h2>Nuevo Cliente</h2>`,"65%","60%"]
                                },
                                {i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/actualizar.png"}).addClass("cover-image")),
                                i2:$("<div>").addClass("title upd"),
                                i3:$("<img>").attr({"src":"/images/act1.png"}).addClass("character"),
                                _dat:{id:"act",t:"Actualizar Clientes",c:$mapa,w:"50%",h:"20%"}
                                //$_dat:[$mapa,"<h2>Ubicar domicilio</h2>","50%","50%"]
                                },
                                {i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/consultar.png"}).addClass("cover-image")),
                                i2:$("<div>").addClass("title selec"),
                                i3:$("<img>").attr({"src":"/images/informe.png"}).addClass("character"),
                                _dat:{id:"consu",t:"Consultar Clientes",c:conte,w:"50%",h:"20%"}
                                
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

$(document).ready(function() {
  
    
});


function onApiLoad(_url) {
    var embed = document.createElement('script');
    embed.src = _url
    document.body.appendChild(embed);
  }


 function ventanaForm(_dat){
    let  $pre = $("<div>").html(_dat[0])
    
    let aleCli = alertify.dialogGuardar($pre.html()).set({title:_dat[1],'resizable':true}).resizeTo('95%','80%')
    $('#a1')[0].click(); 
    
    $(".ajs-dialog").append(_inp("submit","guardar","btnGuardar","",true,"Guardar").click(function(){ $("#validado").click()  }))
    
    $(".simbolMap").click(function(){
        $("#mapaUbi").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8389.465641318115!2d-104.65716831932048!3d24.020739017949932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2smx!4v1706169177361!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`).toggle(function(){
            $(this).animate({
                width:"400px",
                height:"300px",
                border:"1px solid red"
            },2000)})})


    $("#cveElector").on({
       click: function(){$("#grupoElec").toggleClass("ocultar")}
       
       /* mouseenter: function() {
            $("#grupoElec").removeClass("ocultar")
      }, mouseleave: function() {
        $( "#grupoElec" ).addClass("ocultar")
      }*/
    });


    
   // onApiLoad("https://maps.googleapis.com/maps/api/js?key=AIzaSyDi2xjZpxYm9FK2BqWWxwN1CBEcckvUCho&libraries=places,search&callback=initMap&v=weekly")
    
        $("#cp").keyup(e=>{  
            let cp = parseInt($("#cp").val())
            if(cp >= 34000)  $.getJSON(`/coloniasCP?cp=${cp}`, function(data) {$("#col").html("");data.forEach(e=>{ $("#colonia").append($("<option>").val(e).html(e))})});
            else $("#colonia").html("")             
        })

       ele = $("#fileuploader").uploadFile({url:"/uploadFile",fileName:"misFiles",allowedTypes:"png,jpg,jpeg,bmp,zip",showPreview:true,previewHeight:"50px",previewWidth:"auto",autoSubmit:false,showAbort:true,showCancel:true,statusBarWidth:100,dragdropWidth:800,cliente:_dat[4],uploadButtonClass:"botonSubir",dragDropContainerClass:"dragDropEvi",onSelect: function(files){console.log( $(files))},onSubmit: function(obj,xhr){  console.log(obj,xhr)  }})        
       evi =$("#upload-evidencias").uploadFile({url:"/uploadFile",fileName:"misFiles",allowedTypes:"png,jpg,jpeg,bmp,mp4,avi,flv",showPreview:true,previewHeight:"50px",previewWidth:"auto",autoSubmit:false,showAbort:true,showDelete:true,statusBarWidth:100,uploadButtonClass:"botonSubir",dragDropContainerClass:"dragDropEvi"})
       


       
       $(".ajax-upload-dragdrop span").css("color","rgba(0,0,0,0.7)")
        $(".ajax-upload-dragdrop").append($(".ajax-file-upload-container")).css("display","inline-block").append(_div("crear","btn btn-ceear","Crear").click(()=>{ d.startUpload()  }) )


}




$(function () {
    $('.ah-tab-wrapper').horizontalmenu({
        itemClick : function(item) {
            secc = item[0].childNodes[0].data
            _idx = $(item).index() 
            console.log()
            $('.ah-tab-content-wrapper .ah-tab-content').css("height","none").removeAttr('data-ah-tab-active');
            $('.ah-tab-content-wrapper .ah-tab-content:eq(' + _idx + ')').attr('data-ah-tab-active', 'true').css({"height":($(document).height()-200)+"px"})
            .html(_sec(_idx))

             return false; //if this finction return true then will be executed http request
        }
    });
    
});


