const express = require("express");
const app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var mongoose = require('mongoose');
const cors = require("cors");
// aws = require('aws-sdk'),

//     multer = require('multer'),
//     multerS3 = require('multer-s3');


var multer = require("multer");
const bodyParser = require("body-parser");

const ObjectId = require("mongodb").ObjectID;

var path = require('path');
var getproducts = require("./routes/getproduct");
var addtocart = require("./routes/addtocart");
var url = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// const config = require("./config");
// var url = config.mongoURI;
// //var url = "mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/audiomac";
// aws.config.update({
//     secretAccessKey: 'kcFB/bHV4OwYUcGgErdD4lmxW+mYm81EYN6j63uL',
//     accessKeyId: 'AKIAZDJU4JOQDTHFMKHF',
//     region: 'us-east-1'
// });
// s3 = new aws.S3();


///var url = "mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/audiomac";


getproducts(router);

addtocart(router);


app.get('/', (req, res) => {
    //// res.sendFile(__dirname + '/index.html');
});





var arrayfiles=[]



var purl="";


/////////////////////////for local storaogae/////////////
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file={}, cb) {
    cb(null, ( printname=myfilename = Date.now() + "-" + file.originalname));
      purl = printname;
      arrayfiles.push(printname);
  },
});

const upload = multer({ storage });
////////////////////// for amazon s3 ////////////////
// var upload = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: 'mytestbucketpak',
//         key: function (req, file, cb) {
//             console.log(file);
//             cb(null, (printname = myfilename = Date.now() + "-" + file.originalname), (printorginalname = myfilename = file.originalname));
//             myfilearray.push(printname);
//             myorginalname.push(printorginalname);
//         }
//     })
// });

/////////////////////////////handle my diles data///////////////////
router.post('/users/files', upload.array('file'), (req, res) => {

    console.log(req.body);





    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("HomstrDB");

        console.log(arrayfiles)
            var myobj = {
                pname: req.body.pname, price: req.body.price, category: req.body.category, 
                other: req.body.other, discount: req.body.discount, description: req.body.description
            ,productimage:arrayfiles,uploderid:ObjectId(req.body.uploderid)};
        dbo.collection("productsproducts").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            // res.json('submitted');


        }
        )
    })

});

//--------------------------------------------edit user------------------------------------------

router.post('/users/edituser', upload.array('userimg'), (req, res) => {

  

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("HomstrDB");
        var myquery = { _id: ObjectId(req.body.tokenhomstr) };
        var newvalues = { $set:{
             fname: req.body.fname, lname: req.body.lname, phno: req.body.phno,
            address: req.body.address, city: req.body.city, country: req.body.country, userimg: purl}};
        dbo.collection("user").updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
    });



  

});


//------------------------------show user---------------------------


router.post('/users/showuser', upload.array('userimg'), (req, res) => {


//console.log(req.body);

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("HomstrDB");
        dbo.collection("user").findOne({  id: req.body._id }, function (err, result) {
            if (err) throw err;
            if (result != "") {
               //  console.log(result);
                res.json(result);

            }
            else {
                res.json("no");
                console.log('no');
            }

            db.close();
        });
    });



});



//user list
router.get('/user',(req,res)=>{
    db.collection("user").find({}).toArray((err,userList)=>{
        if (err) throw err;
        res.send(userList);
    });
});

router.post('/user/create', (req, res) => {
    db.collection("user").insertOne({
        fullname: req.body.fullname, username: req.body.username
    },(err,result)=>{
            if (err) throw err;
            console.log('connect create');
    });

});

router.post('/user/update', (req, res) => {

});

router.post('/user/delete', (req, res) => {

});



app.use('/api',router);

const port = process.env.PORT || 5000;


server.listen(port, () => console.log(`Listening on port ${port}`));


//----------------------------------------  sign up  ----------------------------------------------



router.post('/users/signup',  (req, res) => {

    console.log(req.body);





    MongoClient.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("HomstrDB");
        var myobj = {
            email: req.body.nameup, password: req.body.passwordup, fname: req.body.fname, lname: req.body.lname, phno: req.body.phno, 
            address: req.body.address, city: req.body.city, country: req.body.country, userimg: req.body.userimg, googleid: req.body.googleid

        };
        dbo.collection("user").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("user");
            // res.json('submitted');


        }
        )
    })

});


//-----------------------------------------------signin with google--------------------------------------------






router.post('/users/signingoogle', (req, res) => {

  ////  console.log(req.body);

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("HomstrDB");
        dbo.collection("user").findOne({ email: req.body.nameup, googleid: req.body.googleid }, function (err, result) {
            if (err) throw err;
            if (result != "") {
               ///// console.log(result);
                res.json(result);

            }
            else {
                res.json("no");
                console.log('no');
            }

            db.close();
        });
    });




});













//--------------------------------------------------------sign in---------------------------------------

router.post('/users/signin', (req, res) => {

   //// console.log(req.body.passwordin);




MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("HomstrDB");
    dbo.collection("user").findOne({ email: req.body.namein, password: req.body.passwordin}, function (err, result) {
        if (err) throw err;
        if(result!=null){
            res.json(result);

        }
  else{
            res.json("no");
  }
       
        db.close();
    });
});

});




//-----------------------------------------stripe-------------------------------------
const stripe = require('stripe')('sk_test_51H44bKBLMrOxcuRPtPrR5k3sK5kFEwdy6eOMWuvX0m9ZfYbkG8KuTn6M1Hs5kjE8slG7TreHQMu6TWrWxnElmsPR001omM8hjb');

router.post('/payment',(req,res)=>{
    const totalamount = req.body.totalamount;
    const token = req.body.token;


    stripe.customers.create({
        email: token.email,
    })
        .then(customer => {
            stripe.charges.create({
                amount:totalamount*100,
                currency:'usd',
                customer:customer.is,
                receipt_email:token.email

            }).then(result=>res.status(200).send(result))
        })
        .catch(error => console.error(error));
})

//---------------------------------------shop setup-----------------------------------------------


router.post('/users/shopsetup', upload.array('shopimg'), (req, res) => {

    console.log(req.body);

    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("HomstrDB");
        var myobj = {
            sname: req.body.sname, stype: req.body.stype, category: req.body.category,
            employees: req.body.employees, email: req.body.email, phno: req.body.phno, address: req.body.address
            , city: req.body.city, country: req.body.country, shopinfo: req.body.shopinfo
            , shopimg: purl
        };
        dbo.collection("shop").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            // res.json('submitted');


        }
        )
    })

});
