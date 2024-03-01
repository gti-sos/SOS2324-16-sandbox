// DÍA 23 FEBRERO 



const API_BASE="/api/v1";


var initialContacts=[
    {
        name:"Domi",
        phone:333333333
    },
    {
        name:"Domingo",
        phone:333333332
    }
];


module.exports = (app,db) => {

    app.get(API_BASE+"/loadInitialContacts",(req,res) =>{
        db.insert(initialContacts);
        res.sendStatus(200,"OK")
    } );

    app.get(API_BASE+"/contacts",(req,res) =>{
        //Es como el filtrado, si {} estuviera vacío cogería todos, en el gihub de nedb, en find documents, aparecen las opciones de filtrar
        db.find( {} ,(err,contacts)=> {
            if(err){
                res.sendStatus(500,"Internal Error");
            }else{
                res.send(JSON.stringify(contacts.map((c)=> {
                    delete c._id;
                    return c;

                })));
            }
        });
        
    } );
    
    app.post(API_BASE+"/contacts",(req,res) =>{
        let contact=req.body;
        db.insert(contact);
        res.sendStatus(201,"Created");
    } );

    app.delete(API_BASE+"/contacts/:name",(req,res) =>{
        let nameE=req.params.name;
        db.remove( {"name":nameE},{},(err,numRemoved)=>{
            if(err){
                res.sendStatus(500,"Internal Error");
            }else{
                if(numRemoved>=1){
                    res.sendStatus(200,"Removed");
                }else{
                    res.sendStatus(404,"Not found");

                }
            }
        } );
    } );

};
