const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/HomstrDB',{useNewUrlParser:true},(err)=>{

if(!err){ console.log('success')}
else { console.log('Error:'+err)}

});
require('./productdetails.model');
