// ejercicio 1 //del aula virtual_

//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, 
// modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender
// y apagar el auto.



var auto={
    color:'rojo',
    marca:'fiat',
    modelo:2099,
    encendido:false
}

function ingresar_auto(){
var arranque;
var text_estado;
    auto.color=document.getElementById('color').value;
    auto.marca=document.getElementById('marca').value;
     auto.modelo=document.getElementById('modelo').value;
     arranque= document.getElementById('encendido').value;

     if(arranque==0){
auto.encendido=true;
text_estado='ENCENDIDO';
     }
     else{
        auto.encendido=false; 
        text_estado='APAGADO'; 
     }
    //  console.log(arranque)

if (confirm('color: '+auto.color+'\n'+'Marca: '+auto.marca+'\n'+'Modelo: '+auto.modelo+'\n'+'Estado del Auto: '+text_estado)==true){
    limpiar();
} 
    }

    
function limpiar(){
    document.getElementById('color').value=0;
    document.getElementById('marca').value=0;
    document.getElementById('modelo').value=0;

}
// function encendido(){
//     var enciende=prompt('para encender el auto ingrese un valor mayor a 0:');

//     if(enciende>0){
//         return true;
//     }
//     return false
// }




