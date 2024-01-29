 alertify.dialog('genericDialog',function(){
    return {
        main:function(content){
            this.setContent(content);
        },
        setup:function(){
            return {
                buttons:[{text: 'Entrar',key: 13, invokeOnClose: false, className: alertify.defaults.theme.ok, scope:'primary'},
                         {text: 'Cancelar',key: 27, invokeOnClose: true, className: alertify.defaults.theme.cancel, scope:'secondary'}],
                focus:{element:function(){
                        return this.elements.body.querySelector(this.get('selector'));
                    },
                    select:false
                },
                options:{
                    basic:false,
                    maximizable:false,
                    resizable:false,
                    padding:false,
                    title:"Iniciar Sesión",
                    modal: true,
                    frameless:false,
                    pinned: true,
                    movable: false,
                    moveBounded:false,
                    autoReset: false,
                    closable: false,
                    closableByDimmer: false,
                    maximizable: false
                }
            };
        },
        callback:function(closeEvent){
            if(closeEvent.index==0)
                 onAutenticar($("#usuario").val(),hex_md5($("#contra").val()),"form")
            else
               location.reload()
        },
        settings:{
            selector:undefined
        }
    };
  });





window.showConfirm =  function(i){
            alertify.confirm('');
        }




function ajusteAle(obj){
        return {
                "nuevoCli":function(){
                                $(".ajs-dialog").append(_inp("submit","guardar","btnGuardar","",true,"Guardar").click(function(){ $("#validado").click()  }));
                                $(".simbolMap").click(function(){
                                            $("#mapaUbi").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8389.465641318115!2d-104.65716831932048!3d24.020739017949932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2smx!4v1706169177361!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`).toggle(function(){
                                            $(this).animate({width:"400px",height:"300px",border:"1px solid red"},2000)})});
                                    $("#cveElector").on({click: function(){$("#grupoElec").toggleClass("ocultar")} });
                                    $("input[type=text]").on({ mouseenter: function(x) {console.log("mouseenter") }, mouseleave: function(x) {console.log("mouseleave")}}); 
                                    onApiLoad("https://maps.googleapis.com/maps/api/js?key=AIzaSyDi2xjZpxYm9FK2BqWWxwN1CBEcckvUCho&libraries=places,search&callback=initMap&v=weekly")
                                    $("#cp").keyup(e=>{  let cp = parseInt($("#cp").val())
                                    if(cp >= 34000)  $.getJSON(`/coloniasCP?cp=${cp}`, function(data) {$("#col").html("");data.forEach(e=>{ $("#colonia").append($("<option>").val(e).html(e))})});
                                    else $("#colonia").html("")})
                                ele = $("#fileuploader").uploadFile({url:"/uploadFile",fileName:"misFiles",allowedTypes:"png,jpg,jpeg,bmp,zip",showPreview:true,previewHeight:"50px",previewWidth:"auto",autoSubmit:false,showAbort:true,showCancel:true,statusBarWidth:100,dragdropWidth:800,cliente:_dat[4],uploadButtonClass:"botonSubir",dragDropContainerClass:"dragDropEvi",onSelect: function(files){console.log( $(files))},onSubmit: function(obj,xhr){  console.log(obj,xhr)  }})        
                                evi =$("#upload-evidencias").uploadFile({url:"/uploadFile",fileName:"misFiles",allowedTypes:"png,jpg,jpeg,bmp,mp4,avi,flv",showPreview:true,previewHeight:"50px",previewWidth:"auto",autoSubmit:false,showAbort:true,showDelete:true,statusBarWidth:100,uploadButtonClass:"botonSubir",dragDropContainerClass:"dragDropEvi"})                               
                        },
                    "login":function(){


                        },
                    "actualizaCli":function(){


                    },
                    "muestraCli":function(){


                    }
             }[obj]
        }






