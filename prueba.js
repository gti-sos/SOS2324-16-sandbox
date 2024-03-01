
let cool=require("cool-ascii-faces");

let express=require("express");
let app=express();

//Para crear una base de datos en memoria
let dataStore=require("nedb");
let dbContacts=new dataStore();


let bodyParser=require("body-parser");
app.use(bodyParser.json());



const PORT=(process.env.PORT||10000); //Lo metemos por comando (export PORT=11111)


//Esto es lo de la api de contactos importada 
let contactApi=require("./api_contacts");

contactApi(app,dbContacts);


//Uso del express para la página web
app.use("/",express.static("./public"));

console.log(process.env);

// app.get("/",(req,res)=>{
//     res.send("<html><body><h1> Holaa </h1></body></html>")
// });

app.get("/cool",(req,res)=>{
    res.send(`<html><body><h1> ${cool()} </h1></body></html>`)
});


//Operación asíncrona, por eso usamos el callback
app.listen(PORT,()=>{
    console.log("Server listening on port "+PORT+".");
});

console.log(`Server initializing...`);

let r=require("./elemento");

app.get("/samples/DMC",(req,res)=>{
    res.send(`<html><body><h1> ${r.todosPaises(r.datos)}  </h1></body></html>`)
});




                 // DÍA 23 FEBRERO 



// const API_BASE="/api/v1";


// var contacts=[
//     {
//         name:"Domi",
//         phone:333333333
//     },
//     {
//         name:"Domingo",
//         phone:333333332
//     }
// ];

// app.get(API_BASE+"/contacts",(req,res) =>{
//     res.send(JSON.stringify(contacts));
// } );

// app.post(API_BASE+"/contacts",(req,res) =>{
//     let contact=req.body;
//     contacts.push(contact);
//     res.sendStatus(201,"Created");
// } );
