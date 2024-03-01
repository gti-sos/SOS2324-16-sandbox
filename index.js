/*let a=3;
let b="3";

if(a===b) //Las igualdades dobles miran el resultado, no el tipo ,miran solo el contenido.  El triple miran tipo y contenido
    console.log("son iguales");
else 
    console.log("son distintos");

//FUNCIONES
function log(mess){ //No definimos el tipo de entrada
    console.log(mess);
}

log("test log");


let o =new Object();  //Hay guías de objetos, como la mdn de javascript
let m=new Map();
let numeros=new Array();
let lista=[];   //Array
numeros[0]=1;
numeros[1]=2;
numeros[3]=4;

//Se pueden hacer listas de tipos distintos, arrays mixtos
lista.push(1);
lista.push("texto");

//log(lista);
*/
let numeros=[5,6,7];

// for(let i=0;i<numeros.length;i++){
//     log("El número " +(i+1)+" es:"+numeros[i]);
// }
// numeros.forEach(log); //Itera el Array de tal forma que a log entrada cada número de la lista. Esto sería igual a log(numeros[i]) siendo i cada elemento de numeros
// // print i for in numeros
// numeros.forEach(log());  //Aquí llama a la funcion dandole como parámetro vacío

// numeros.forEach((n)=>{
//     log(n);});

function log(mess){ //No definimos el tipo de entrada
    console.log(mess);
}


/*
numeros.filter( (n)=> {
    return n>=6
} ).forEach( (n)=>log(n) );
*/


// numeros.map( (n)=> {
//     return n+2
// } ).forEach( (n)=>log(n) );


// var s=numeros.reduce( (a,n)=>{  //a=acumulador, por defecto igual a 0
//     log(a+"-->"+n)
//     return a+n;

// } );
// log(s);

// let contact=new Object();

// contact.name="Domii";
// contact.phone="222222222";

// let contact2={name:"Pol",phone:"444444444"};

// console.log(contact2);

// function busqueda(nombre,listaC){
//     listaC.filter( (c)=> { c.name.match(nombre) } )
// }

let datos=[
    {
        name:"Ting Zhu",
        ranking:3,
        nationality:"China",
        position:"Outside Hitter",
        birthdate:"29/11/1994",
        height:198,
        weight:78,
        dominant_hand:"Right",
        country_point:320.0,
        point:1190.0
    },
    {
        name:"Macris Carneiro",
        ranking:176,
        nationality:'Brazil',
        position:"Setter",
        birthdate:"03/03/1989",
        height:178,
        weight:68,
        dominant_hand:"Right",
        country_point:220.0,
        point:833.0
    },
    {
        name:"Gabriela Guimaraes",
        ranking:31,
        nationality:'Brazil',
        position:"Outside Hitter",
        birthdate:"19/05/1994",
        height:180,
        weight:65,
        dominant_hand:"Right",
        country_point:220.0,
        point:788.0
    }
];

function mediaPuntoPais(bd,pais){
    let filt = bd.filter( (c)=> c.nationality===pais );
    let acum=0;
    filt.forEach( (e)=> acum+=e.point );
    let n=filt.length;
    return acum/n;
}

function todosPaises(bd){
    let visitados=[];
    bd.forEach( (e)=> {
        let n=visitados.filter( (r)=>r===e.nationality );


        if (  n.length<=0){
            let pos=visitados.length;
            visitados[pos]=e.nationality;
            console.log(visitados);
        }
    } )

}

todosPaises(datos);
