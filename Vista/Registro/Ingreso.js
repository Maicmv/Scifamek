

function ingresar() {
    usuario = $("#usuario").val();
    contrasena = $("#contrasena").val();
    params = {usuario: usuario, contrasena: contrasena};
    
    $.post("Controlador/Controlador.php",
            {clase: "Cliente", metodo: "loguear", parametros: params},
            function (r) {

                r = JSON.parse(r);
                if (r == 0) {
                    console.log("No hpta");
                }else{
                    
                    
                    redimensionar();
                    $("#contenido").load('Vista/Inicio/Inicio.html');
                }

            });
}


function registrar() {
    $("#contenido").load('Vista/Registro/Registro.html');
}

function redimensionar(){
    
    $("#menuClientes").addClass("col-xs-3");
    $("#contenido").removeClass("col-xs-12").addClass("col-xs-9");
    UL = $("<ul class=''><li>Proyectos</li><li>Proyectos</li></ul>");
     $("#menuClientes").add(UL);
    
}