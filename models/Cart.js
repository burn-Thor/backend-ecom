const mongoose = require('mongoose');


const CartSchema = new mongoose.Schema(
    {
        title: {type: String, required:true, unique:true},  
        description: {type:String, required:true},
        img: {type:String, required:true},
        size: {type:String},
        colour: {type:String},
        price: {type:Number, required:true},
     
    }, {timestamps:true}
    )

module.export = mongoose.model("Cart", CartSchema)