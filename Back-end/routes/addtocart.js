const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const config = require("../config/config");
var url = config.mongoURI;

module.exports = function (router) {
  router.post("/users/addtocart", async (req, res) => {



    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("HomstrDB");

       
            var myobj = {
                uploderid: ObjectId(req.body.uid), productid: ObjectId(req.body.pid)};
        dbo.collection("userscart").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            // res.json('submitted');


        }
        )
    })

  
  }
  )






  router.post("/users/showcart", async (req, res) => {

console.log(req.body)



MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },async function(err, db) {
    if (err) throw err;
    var dbo = db.db("Homstr");
    var dbo = db.db("");
    /*Return only the documents with the address "Park Lane 38":*/
    var query = {};

    allsongs= await dbo.collection('userscart').aggregate([

    


      { $match : {uploderid:ObjectId(req.body.id)}},
      // { $sort : { plays : -1,likes : -1,share : -1,playlist:-1}},
      { $lookup:
         {
           from: 'productsproducts',
           localField: 'productid',
           foreignField: '_id',
           as: 'orderd'
         }
       },

      
       {   $unwind:"$orderd" }, 

  
       {   
        $project:{
          
    




         
            category : "$orderd.category",
            productname : "$orderd.pname",
            actualid : "$orderd._id",
            price:"$orderd.price",
            pimage:"$orderd.productimage",
          
        } 
    }
      ]).toArray()

      
        
        
        
        
        
        
                console.log(allsongs);
                res.json(allsongs);







   });
  

  
  }
  )








}



