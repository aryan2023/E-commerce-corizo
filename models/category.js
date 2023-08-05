var express=require('express');
var mongoose=require('mongoose');
var Schema = mongoose.Schema
mongoose.connect("mongodb+srv://admin:root@cluster0.lxdjz11.mongodb.net/?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true  })

// Category schema 
const CategorySchema=new Schema({

        title:{
            type:String,
            required:true,
            trim: true
        },
        slug:{
            type:String,
            trim: true
        }, 
      
});
module.exports = CategorySchema;