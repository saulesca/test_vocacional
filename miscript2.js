// se declara un array con las preguntas que se van a hacer

let arraypreguntas = 
[ 
/*Administración de Archivos y Gestión Documental*/
//"¿Te gusta tener tus papeles ordenados?",
"¿Te gusta leer documentos y acomodar \ncosas?",
"¿Te gusta ayudar a los demás a organizar\n cosas?",

/*Bibliotecología y Estudios de la Información*/
//"¿Tienes una pasión por el orden?",
"¿Disfrutas leer documentos y organizar \nla información?",
"¿Te gusta apoyar a las personas a \nencontrar las cosas?",

//Desarrollo y Gestión Interculturales
//"¿Tienes esa necesidad de solucionar \nconflictos entre tus amigos,\n familia, vecinos, etc.?",
"¿Anhelas con un desarrollo equitativo\n y justo para las sociedades?",
"¿Imaginas un mundo unido, pacífico y \ncomprensible?",



//Estudios Latinoamericanos
//"¿Te apasiona todo lo referente a América\n Latina?",
"¿Constantemente te informas sobre el \nterritorio, las culturas\n y las sociedades?",
"¿Sueñas en ser un conocedor del universo \nlatinoamericano?",

//Filosofía
"¿Tiendes a poner en tela de juicio todo lo \nque te dicen?",
"¿Buscas respuestas en diversos autores del\n pensamiento?",
//"¿No hay teoría que diluya tus inquietudes?",

//geografia
"¿Te gustan las excursiones?",
"¿Te gusta explorar los diversos territorios\n de la esfera terrestre?",
//"¿Deseas trabajar tu sentido de la orientación?",

//historia
"¿Tienes fascinación por saber cómo pasaron \nlas cosas?",
"¿Te gusta investigar hasta llegar al meollo \ndel asunto?",
//"¿Vives por y para el chisme?",

//LENGUA Y LITERATURAS MODERNAS (LETRAS ALEMANAS, FRANCESAS, INGLESAS, ITALIANAS O PORTUGUESAS)
"¿Tienes facilidad para hablar y leer en otro \nidioma?",
"¿Tienes interés por conocer acerca de la cultura\n de algún otro país?",
//"¿Has pensado dar clases y enseñar algún idioma?",

//LENGUA Y LITERATURAS HISPÁNICAS
"¿Te gusta la literatura en lengua española?",
//"¿Buscas herramientas para hacer un análisis \nliterario más completo?",
"¿Tienes interés por conocer acerca de la \ncultura hispana continental\n y europea?",

//LETRAS CLÁSICAS
"¿Te has preguntado por el origen de algunas \npalabras?",
"¿Tienes interés por la cultura griega o \nromana?",
//"¿Te gustaría aprender un idioma antiguo?",

//PEDAGOGÍA

//"¿Te gustaría dar clases?",
"¿Consideras que puedes enseñar a los demás?",
"¿Te preocupas por las políticas de educación?",

//Literatura dramatica yteatro
"¿Tienes interés  por las artes escénicas?",
//"¿Alguna vez te has imaginado dirigiendo \nuna obra de teatro?",
"¿Llama tu curiosidad saber lo que pasa \ndetrás de escena?",

// pregunta comodin 
//la agregue por que no me sumaba el ultimo valor y asi ya lo hace 
//asi que solo sirve para sumar la anterior pregunta a esta
//lo que contesten aqui no se agrega a los valores

"¿eres dedicado en lo que haces?"





];

let pregunta = 0;
let letra="";

// declaramos una variable por cada carrera

let administracion=0;
let bibliotecologia=0;
let desarrollo=0;
let latino=0;

let filosofia=0;
let geografia=0;
let historia=0;
let modernas=0;

let hispanicas=0;
let clasicas=0;
let pedagogia=0;
let literatura=0;


//declaramos un array donde iran las carreras con 
//mas alto puntaje

let arraycarreras = [];
let tam_arraycarreras=0;


//________________________________________________________________________

function display_numeros(letra){
    if(pregunta+1<arraypreguntas.length){
        acumular(letra);
        pregunta++;
        document.getElementById("display").value=arraypreguntas[pregunta]+"\npregunta("+(pregunta+1)+"/25)";        
    }

    else{
            // aqui lleva a la pantalla final
            //aqui voy a meter una funcion que me diga cual es
            //la carrera con mas puntos
         
            juegoaFinal();
            carrera_sugerida();
            lascarreras();
            
            
            
            

    }
    if(pregunta > 0){
        document.getElementById("boton_a").value="a";
        document.getElementById("boton_b").value="b";
    }
   
    
    
}
//_________________________________________________________________________________

function carrerasEnArreglo() {
    tam_arraycarreras=arraycarreras.length;
        
    for (let index = 0; index < arraycarreras.length; index++) {
        document.write(arraycarreras[i]);
        document.write("<br>"); 
        
    }
    
}
// esta funcion muestra la carrera elegida dentro de un boton y
// oculta los botones que no necesitaremos para ver las carreras
function lascarreras() {



    if(arraycarreras[0]==7){
        var elemento=document.getElementById("boton0");
        elemento.style.display="none";}
    else{
        document.getElementById("boton0") .value=arraycarreras[0];
    
    }

    if(arraycarreras[1]==7){
        var elemento=document.getElementById("boton1");
        elemento.style.display="none";}
    else{
        document.getElementById("boton1") .value=arraycarreras[1];
    
    }

    if(arraycarreras[2]==7){
        var elemento=document.getElementById("boton2");
        elemento.style.display="none";}
    else{
        document.getElementById("boton2") .value=arraycarreras[2];
    
    }

    if(arraycarreras[3]==7){
        var elemento=document.getElementById("boton3");
        elemento.style.display="none"; }
    else{
        document.getElementById("boton3") .value=arraycarreras[3];
    
    }

    if(arraycarreras[4]==7){
        var elemento=document.getElementById("boton4");
        elemento.style.display="none";}
    else{
        document.getElementById("boton4") .value=arraycarreras[4];
    
    }

    if(arraycarreras[5]==7){
        var elemento=document.getElementById("boton5");
        elemento.style.display="none";}
    else{
        document.getElementById("boton5") .value=arraycarreras[5];
    
    }
    if(arraycarreras[6]==7){
        var elemento=document.getElementById("boton6");
        elemento.style.display="none";}
    else{
        document.getElementById("boton6") .value=arraycarreras[6];
    
    }
    if(arraycarreras[7]==7){
        var elemento=document.getElementById("boton7");
        elemento.style.display="none";}
    else{
        document.getElementById("boton7") .value=arraycarreras[7];
    
    }
    if(arraycarreras[8]==7){
        var elemento=document.getElementById("boton8");
        elemento.style.display="none";    }
    else{
        document.getElementById("boton8") .value=arraycarreras[8];
    
    }
    if(arraycarreras[9]==7){
        var elemento=document.getElementById("boton9");
        elemento.style.display="none";
   }
    else{
        document.getElementById("boton9") .value=arraycarreras[9];
    
    }
    if(arraycarreras[10]==7){
        var elemento=document.getElementById("boton10");
        elemento.style.display="none";
    }
    else{
        document.getElementById("boton10") .value=arraycarreras[10];
        }

    if(arraycarreras[11]==7){
        var elemento=document.getElementById("boton11");
        elemento.style.display="none";
       }
    else{
        document.getElementById("boton11") .value=arraycarreras[11];
    
    }


}

// la siguiente funcion acumula puntos por carrera

function acumular(letra) {
    if (letra=="a" && pregunta == 0) {
        administracion=administracion+1;
    }
    else if (letra=="a" && pregunta == 1) {
        administracion=administracion+1;
    }
    else if (letra=="a" && pregunta == 2) {
        bibliotecologia=bibliotecologia+1;
    }
    else if (letra=="a" && pregunta == 3) {
        bibliotecologia=bibliotecologia+1;
    }
    else if (letra=="a" && pregunta == 4) {
        desarrollo=desarrollo+1;
    }
    else if (letra=="a" && pregunta == 5) {
        desarrollo=desarrollo+1;
    }
    else if (letra=="a" && pregunta == 6) {
        latino=latino+1;
    }
    else if (letra=="a" && pregunta == 7) {
        latino=latino+1;
    }



    else if (letra=="a" && pregunta == 8) {
        filosofia=filosofia+1;
    }
    else if (letra=="a" && pregunta == 9) {
        filosofia=filosofia+1;
    }
    else if (letra=="a" && pregunta == 10) {
        geografia=geografia+1;
    }
    else if (letra=="a" && pregunta == 11) {
        geografia=geografia+1;
    }
    else if (letra=="a" && pregunta == 12) {
        historia=historia+1;
    }
    else if (letra=="a" && pregunta == 13) {
        historia=historia+1;
    }
    else if (letra=="a" && pregunta == 14) {
        modernas=modernas+1;
    }
    else if (letra=="a" && pregunta == 15) {
        modernas=modernas+1;
    }



    else if (letra=="a" && pregunta == 16) {
        hispanicas=hispanicas+1;
    }
    else if (letra=="a" && pregunta == 17) {
        hispanicas=hispanicas+1;
    }
    else if (letra=="a" && pregunta == 18) {
        clasicas=clasicas+1;
    }
    else if (letra=="a" && pregunta == 19) {
        clasicas=clasicas+1;
    }
    else if (letra=="a" && pregunta == 20) {
        pedagogia=pedagogia+1;
    }
    else if (letra=="a" && pregunta == 21) {
        pedagogia=pedagogia+1;
    }
    else if (letra=="a" && pregunta == 22) {
        literatura=literatura+1;
    }
    else if (letra=="a" && pregunta == 23) {
        literatura=literatura+1;
    }
    else  {
        
    }


       
}



//aqui voy a realizar la funcion de la
//carrera con mas puntos
function carrera_sugerida(){
    //para el caso de que no ponga si a ninguna pregunta se le mandara un mensaje 
    //de no tenemos reconmendacion para el usuario
    if(administracion==0 && bibliotecologia==0 && desarrollo==0 && latino==0    &&     filosofia==0 && geografia==0 && historia==0 && modernas==0     &&      hispanicas==0 && clasicas==0 && pedagogia==0 && literatura==0    ){
        arraycarreras.push('no tenemos alguna recomendacion por ahora ');
        //return arraycarreras;
    }
    else{
            //-------


        if (administracion>=bibliotecologia && administracion>=desarrollo && administracion>=latino  && administracion>=filosofia && administracion>=geografia  && administracion>=historia  &&  administracion>=modernas  && administracion>=hispanicas  &&  administracion>=clasicas  &&  administracion>=pedagogia  &&  administracion>=literatura) {        
            arraycarreras.push('Administracion de archivos y gestion documental');         
        }
        if (bibliotecologia>=administracion && bibliotecologia>=desarrollo && bibliotecologia>=latino  && bibliotecologia>=filosofia && bibliotecologia>=geografia  && bibliotecologia>=historia  &&  bibliotecologia>=modernas  && bibliotecologia>=hispanicas  &&  bibliotecologia>=clasicas  &&  bibliotecologia>=pedagogia  &&  bibliotecologia>=literatura) {        
            arraycarreras.push('Bibliotecologia y estudios de la información');
        }
        if (desarrollo>=administracion && desarrollo>=bibliotecologia && desarrollo>=latino  && desarrollo>=filosofia && desarrollo>=geografia  && desarrollo>=historia  &&  desarrollo>=modernas  && desarrollo>=hispanicas  &&  desarrollo>=clasicas  &&  desarrollo>=pedagogia  &&  desarrollo>=literatura) {        
            arraycarreras.push('Desarrollo y gestion interculturales');
        }
        if (latino>=administracion && latino>=bibliotecologia && latino>=desarrollo  && latino>=filosofia && latino>=geografia  && latino>=historia  &&  latino>=modernas  && latino>=hispanicas  &&  latino>=clasicas  &&  latino>=pedagogia  &&  latino>=literatura) {        
            arraycarreras.push('Estudios latinoamericanos');
        }


        if (filosofia>=administracion &&  filosofia>=bibliotecologia && filosofia>=desarrollo  && filosofia>=latino && filosofia>=geografia  && filosofia>=historia  &&  filosofia>=modernas  &&  filosofia>=hispanicas  &&  filosofia>=clasicas  &&  filosofia>=pedagogia  &&  filosofia>=literatura) {        
            arraycarreras.push('Filosofía');
        }
        if (geografia>=administracion && geografia>=bibliotecologia && geografia>=desarrollo  && geografia>=latino && geografia>=filosofia  && geografia>=historia  && geografia>=modernas  && geografia>=hispanicas  &&  geografia>=clasicas  &&  geografia>=pedagogia  &&  geografia>=literatura) {        
            arraycarreras.push('Geografía');
        }
        if (historia>=administracion && historia>=bibliotecologia && historia>=desarrollo  && historia>=latino && historia>=filosofia  && historia>=geografia  && historia>=modernas  && historia>=hispanicas  &&  historia>=clasicas  &&  historia>=pedagogia  &&  historia>=literatura) {        
            arraycarreras.push('Historia');
        }
        if (modernas>=administracion && modernas>=bibliotecologia && modernas>=desarrollo  && modernas>=latino && modernas>=filosofia  && modernas>=geografia  && modernas>=historia  && modernas>=hispanicas  && modernas>=clasicas  &&  modernas>=pedagogia  &&  modernas>=literatura) {        
            arraycarreras.push('Lengua y literaturas modernas');
        }



        if (hispanicas>=administracion && hispanicas>=bibliotecologia && hispanicas>=desarrollo  && hispanicas>=latino && hispanicas>=filosofia  && hispanicas>=geografia  && hispanicas>=historia  && hispanicas>=modernas  && hispanicas>=clasicas  &&  hispanicas>=pedagogia  &&  hispanicas>=literatura) {        
            arraycarreras.push('Lengua y literaturas hispanicas');
        }
        if (clasicas>=administracion && clasicas>=bibliotecologia && clasicas>=desarrollo  && clasicas>=latino && clasicas>=filosofia  && clasicas>=geografia  && clasicas>=historia  && clasicas>=modernas  && clasicas>=hispanicas  &&  clasicas>=pedagogia  &&  clasicas>=literatura) {        
            arraycarreras.push('Letras clasicas');
        }
        if (pedagogia>=administracion &&   pedagogia>=bibliotecologia &&  pedagogia>=desarrollo  &&  pedagogia>=latino &&  pedagogia>=filosofia  &&  pedagogia>=geografia  &&  pedagogia>=historia  &&  pedagogia>=modernas  &&  pedagogia>=hispanicas  &&   pedagogia>=clasicas  &&  pedagogia>=literatura) {        
            arraycarreras.push('Pedagogia');
        }
        if (literatura>=administracion && literatura>=bibliotecologia && literatura>=desarrollo  && literatura>=latino && literatura>=filosofia  && literatura>=geografia  && literatura>=historia  && literatura>=modernas  && literatura>=hispanicas  &&  literatura>=clasicas  &&  literatura>=pedagogia) {        
            arraycarreras.push('Literatura dramatica y teatro');
        }    
      
        //return "";
        //con este for rellenamos los valores que faltan con 7 para llenar 
        //el arreglo igual al numero de carreras que tenemos que son 12
        for(let i=arraycarreras.length;i<12;i++)
        {
            arraycarreras[i]=7;
        }

            //--------
    }

}




//__________________declaro una funcion para cambiar entre pantallas___________________


// pantalla de inicio
function inicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}

//pantalla de operaciones
function comenzarJuego(){
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
   
   
}
//pantalla de operaciones
function juegoaFinal(){
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
   
}


//pantalla final
function volverAlInicio(){
    pregunta=0;
    document.getElementById("display").value="¿Te gusta leer documentos y acomodar \ncosas?";    
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
    
}
