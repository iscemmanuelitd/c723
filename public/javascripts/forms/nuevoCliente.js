    
   
    
    let prop = ["Propia","Rentada","Prestada","de los Padres"]
    let edos = ["Aguascalientes","Baja California","Baja California Sur","Campeche","Cohuila","Colima","Chiapas","Chihuahua","CDMX","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","México","Michoacan","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Queretaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","--29--","Veracruz","Yucatán","Zacatecas"]
    let $nuevoCli = _div("nuevoCliente","ventanaMain")
    let $form1 = $("<form>").attr({"id":"nCli","action":"Javascript:valida()"})
    let $fs1 = $("<fielset>").addClass("_datPerso").html("<h3>Datos Personales</h3><br>")
    let $fs2 = $("<fielset>").addClass("_datPerso").html("<h3>Domicilio</h3><br>")
    let $fs3 = $("<fielset>").addClass("fotos").html("<h3>Evidencias Fotograficas</h3><br>")
    
    $fs1.append(_inp("text","nombre","enlinea imp w200","Nombre",true)).append(_inp("text","paterno","enlinea imp w200","Apellido Paterno",true))
    .append(_inp("text","materno","enlinea imp w200","Apelllido Materno",true)).append($("<div>").addClass("grupo").append($("<label>").html("Fecha de Nacimiento: ")).append(_inp("date","fecha_nac","enlinea w150","Fecha de Nacimiento",true)))       
    .append($("<div>").addClass("grupo").append($("<label>").html("Lugar de Nacimiento: ")).append(_selec("ent","ent",edos,10))).append(_inp("tel","tel","enlinea w100","Num. Teléfono",true))
    .append(_inp("text","cveElector","enlinea w150","Clave de Elector",true)).append(_div("fileuploader","subirCredencial enlinea","Arrastre  y suelte la imagen de la credencial"))
    
    $fs2.append(_inp("text","calle","enlinea w300","Calle, Avenida, Carretera, etc",true)).append(_inp("number","num_ext","enlinea  w100","Num ext",true))
    .append(_inp("text","num_int","enlinea  w100","Num int",true)).append(_inp("text","cp","enlinea w100","Código Postal",true))
    .append($("<select>").html("<option>Colonia</option>").attr({"name":"colonias","id":"col"}).addClass("enlinea w150")).append($("<div>").addClass("grupo").append($("<label>").html("Propiedad: ")).append(_selec("prop","ent",prop,1)))
    .append(_inp("number","antiguedad","enlinea w100","Antigüedad",true)).append($("<div>").addClass("grupo").append($("<label>").html("Ubicación: ")).append(_inp("text","ubi","enlinea w200","Latitud , Longitud",false)).append($("<span>").addClass("material-symbols-outlined simbolMap").html("home_pin")))
    .append(_div("mapaUbi","mapaUbi","Mapa para ubicar").toggle())
    //.append(_div("mapModal","mapModal",_div("ubi-map","ubi-map",$("<iframe>").attr({"src":"https://www.google.com.mx/maps/@21.8787097,-102.2836594,9311m/data=!3m1!1e3?entry=ttu","WIDTH":"100%","HEIGTH":"100%"}))))
    $fs3.append(_div("upload-evidencias","upload","Subir Evidencias"))


    /*-*-*-*-**-*-*-*-*-*   P E S T A Ñ A S  -*-*-*-*-*-*-*-*-**/    
    let $tmp = _div("tab-contaier","tab-contaier","")
    Array(Array("Datos Personales",$fs1),Array("Domicilio",$fs2),Array("Evidencias Fotográficas",$fs3)).forEach((e,i,a)=>{ $tmp.append(_div(`tab${i+1}`,"tab",`<a id="a${i+1}" href="#tab${i+1}">${e[0]}</a>`).append(_div(`tc${i+1}`,"tab-content",e[1]))) })
    let  $pestañas = _div("tabs","tabs",$tmp)
    $form1.html($pestañas).append(_inp("submit","guardar","btnGuardar","",true,"Enviar"))
    $nuevoCli.html($form1)


let $mapa = _div("mapa","ventanaMain")
let $dir = _div("pac-card","pac-card",_div("pac_container","",_inp("text","pac-input","address","Buscar Dirección")))
let $info = _div("infowindow-content").html($("<span>").attr("id","place-name").addClass("title")).append($("<span>").attr("id","place-address"))

$mapa.html($dir).append($dir).append(_div("map")).append($info)



function _div(id="",clase="",html=""){
    let $o = $("<div>")
    $o.attr("id",id).addClass(clase).html(html)
    return $o
}

function _inp(tipo,id="",clase="",ph="",req=false,valor=""){
    let $i = $("<input>")
    $i.attr({"type":tipo,"id":id,"placeholder":ph,"required":req}).addClass(clase).val(valor)
    return $i
}

function _selec(id,clase,opc,sel){
    let $s = $("<select>")
    $s.attr({"id":id}).addClass(clase).html("")
    opc.forEach((e,i,a) => {  $s.append($("<option>").val(i+1).html(e).attr(i+1==sel ? {"selected":true}:{"selected":false})) })
    console.log($s)
    return $s
}



function valida(d){
   d.getUrlParameter("x")
}

/*
            <div id="drop-area">
                <form class="my-form">
                  <p>Arrastrar  y Soltar archivo en esta área</p>
                  <input type="file" id="fileElem" multiple accept="image/*" onchange="handleFiles(this.files)">
                  <label class="button" for="fileElem">Selecciona algun archivo</label>
                </form>
                <div id="gallery"></div>
            </div>
            <progress id="progress-bar" max=100 value=0></progress>
    <div id="fileuploader">Upload</div>

*/

