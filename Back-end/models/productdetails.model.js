const mongoose = require('mongoose');

var productdetailsSchema=new mongoose.Schema({
productname:{
    type:String
},

    price: {
        type: String
    },

    category: {
        type: String
    }

});
mongoose.model('productdetails', productdetailsSchema);