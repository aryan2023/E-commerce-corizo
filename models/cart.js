var express=require('express');
var mongoose=require('mongoose');
var Schema = mongoose.Schema
mongoose.connect("mongodb+srv://admin:root@cluster0.lxdjz11.mongodb.net/?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true  })

// Page schema 
const CartSchema=new Schema({
    title:{
        type:String,
        required:true,
        trim: true
    },
    qt:{
        type:Number,
        
    },
    price:{
        type:Number,
        trim: true,
        required:true
    },
    image:{
        type:String,
        
    },
    username:{
        type:String,
        trim:true
    }
});
module.exports = CartSchema;

// var Page=mongoose.exports=mongoose.model('Page',PageSchema);