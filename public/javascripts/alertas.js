valida = alertify.dialog('genericDialog',function(){
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



function alertas(d){
    console.log($(d.c).html())
    alertify.prompt().destroy()
    let $ALE =  alertify.prompt($(d.c).html())
    
    $ALE.set({title:d.t,'resizable':true,onok:function(e,v){alertify.success('You entered: ' +v)},oncancel:function(){ alertify.error('Cancel') },onclosing:function(){  alertify.message('prompt is about to close.')}}).resizeTo(d.w,d.h)

   
    }


