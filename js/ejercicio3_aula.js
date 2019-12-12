// ejercicio 1 //del aula virtual_

//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, 
// modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender
// y apagar el auto.



function Auto(){
this.marca;
this.titular;
this.nombre;
this.color;
this.modelo;
this.encendido;
this.encender=function(){
    this.encendido=true;
},
this.apagar=function(){
    this.encendido=false;
}

this.ingresar_datos=function(){
this.color=document.getElementById('color').value;
this.marca=document.getElementById('marca').value;
this.modelo=document.getElementById('modelo').value;
this.titular=document.getElementById('titular').value;


let selec_option=document.getElementById('encendido').value;

// console.log('opcion del select'+selec_option)
if(selec_option==0){
    this.encender();
} else{
    this.apagar();
}
if(this.ctrl(this.color,this.marca,this.modelo,this.titular)==true){

this.imprimir();
} else {
    alert('debe completar todos los campos');
}


}
this.limpiar=function(){
document.getElementById('color').value='';
document.getElementById('titular').focus();
document.getElementById('marca').value='';
document.getElementById('modelo').value='';
document.getElementById('titular').value='';
}
this.imprimir=function(){
 console.log('TITULAR: '+this.titular+'\n'+'COLOR: '+this.color+'\n'+'MARCA: '+this.marca+'\n'+'MODELO: '+this.modelo+'\n'+'ENCENDIDO: '+this.encendido);
let msj= confirm('TITULAR: '+this.titular+'\n'+'COLOR: '+this.color+'\n'+'MARCA: '+this.marca+'\n'+'MODELO: '+this.modelo+'\n'+'ENCENDIDO: '+this.encendido);

// console.log('valor de msj: '+msj);

 if(msj==true){
    this.limpiar();
}
}

this.ctrl=function(campo1,campo2,campo3,campo4){

if(campo1!=''&&campo2!=''&&campo3!=''&&campo4!='')
{
    return true;
} else{
    return false;
}
}
}

const auto1=new Auto(); // se crea una instancia de una clase

function ingresar_auto(){
    
auto1.ingresar_datos();
}



