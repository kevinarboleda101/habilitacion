const {MongoClient} = require('mongodb');
const dbname = 'blog'
const url = 'mongodb://localhost:27017/'+dbname
const client = new MongoClient(url, {useUnifiedTopology: true});



async function conectar(){
    await client.connect(function(err){
        if(err){
           console.log(err);
           return;    
        }
        console.log('Estamos conectados')
    })

}

async function traer(){
    let db = client.db(dbname);
    let collection = db.collection('publicacion');
       collection.find().toArray(function(er, docs){
           console.log(docs)
       })
    }

    module.exports={traer,conectar}

