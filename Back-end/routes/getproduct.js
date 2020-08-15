const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const config = require("../config/config");
var url = config.mongoURI;

module.exports = function (router) {
  router.post("/users/getproducts", async (req, res) => {



if(req.body.searchtext==""){



    MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },async function(err, db) {
      if (err) throw err;
      var dbo = db.db("Homstr");
      var dbo = db.db("");
      /*Return only the documents with the address "Park Lane 38":*/
      var query = {};
  
      allsongs= await dbo.collection('productsproducts').aggregate([

      


        { $match : {}},
        // { $sort : { plays : -1,likes : -1,share : -1,playlist:-1}},
        { $lookup:
           {
             from: 'user',
             localField: 'uploderid',
             foreignField: '_id',
             as: 'orderd'
           }
         },
  
        
         {   $unwind:"$orderd" }, 

    
         {   
          $project:{
            pname: 1,
            price: 1,
            category: 1,
            other: 1,
            discount:1,
            description:1,
            productimage:1,
      
  
  
  
  
           
              uplodername : "$orderd.lname",
              uploderid : "$orderd._id",
            
          } 
      }
        ]).toArray()
  
        
          
          
          
          
          
          
                  console.log(allsongs);
                  res.json(allsongs);
  
  
  
  
  
  
  
     });







  }
  else{




 console.log(req.body);
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },async function(err, db) {
    if (err) throw err;
    var dbo = db.db("Homstr");
    var dbo = db.db("");
    /*Return only the documents with the address "Park Lane 38":*/
    var query = {};

    allsongs= await dbo.collection('productsproducts').aggregate([

    


      { $match : {category:req.body.categoty,pname:req.body.searchtext}},
      // { $sort : { plays : -1,likes : -1,share : -1,playlist:-1}},
      { $lookup:
         {
           from: 'user',
           localField: 'uploderid',
           foreignField: '_id',
           as: 'orderd'
         }
       },

      
       {   $unwind:"$orderd" }, 

  
       {   
        $project:{
          pname: 1,
          price: 1,
          category: 1,
          other: 1,
          discount:1,
          description:1,
          productimage:1,
    




         
            uplodername : "$orderd.lname",
            uploderid : "$orderd._id",
          
        } 
    }
      ]).toArray()

      
        
        
        
        
        
        
                console.log(allsongs);
                res.json(allsongs);







   });





    
}
  
  
}


  
  
  
  )}



