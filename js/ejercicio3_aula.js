// ejercicio 1 //del aula virtual_

//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, 
// modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender
// y apagar el auto.



// var auto={
//     color:'rojo',
//     marca:'fiat',
//     modelo:2099,
//     encendido:false
// }

// function ingresar_auto(){
// var arranque;
// var text_estado;
//     auto.color=document.getElementById('color').value;
//     auto.marca=document.getElementById('marca').value;
//      auto.modelo=document.getElementById('modelo').value;
//      arranque= document.getElementById('encendido').value;

//      if(arranque==0){
// auto.encendido=true;
// text_estado='ENCENDIDO';
//      }
//      else{
//         auto.encendido=false; 
//         text_estado='APAGADO'; 
//      }
//     //  console.log(arranque)

// if (confirm('color: '+auto.color+'\n'+'Marca: '+auto.marca+'\n'+'Modelo: '+auto.modelo+'\n'+'Estado del Auto: '+text_estado)==true){
//     limpiar();
// } 
//     }

    
// function limpiar(){
//     document.getElementById('color').value=0;
//     document.getElementById('marca').value=0;
//     document.getElementById('modelo').value=0;

// }
// function encendido(){
//     var enciende=prompt('para encender el auto ingrese un valor mayor a 0:');

//     if(enciende>0){
//         return true;
//     }
//     return false
// }


// ejercicio hecho con clase y poniendo metodos

function Auto(marca,modelo,nombre,color){
this.marca=marca;
this.modelo=modelo;
this.nombre=nombre;
this.color=color;
this.encendido=false;
this.encender=function(){
    this.encendido=true;
},
this.apagar=function(){
    this.encendido=false;
}

}

const auto1=new Auto('renault',2000,'clio','verde'); // se crea una instancia de una clase

console.log(auto1);
auto1.encender()
console.log(auto1);


// var auto={
//     marca:'renault',
//     modelo:2018,
//     nombre:'clio',
//     color:'rojo',
//     encendido:true,
//     encenderAuto:function(){ //funcion anonima
//         this.encendido=true; // para hacer referencia a la propiedad de la misma clase se pone this.
//     },
//     encenderAuto:function(){
//         this.encendido=false;
//     }
// }




