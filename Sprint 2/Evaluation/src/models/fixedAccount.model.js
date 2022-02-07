const mongoose = require("mongoose");
const fixedAccountSchema = new mongoose.Schema({
    account_number: {type:String,required:true},
    balance: {type:Number,required:true},
    interestRate: {type:String,required:true},
    startDate: {type:Date,required:true},
    maturityDate: {type:String,required:true},
    createdAt: {type:String,required:true},
    updatedAt: {type:String,required:true},
   
})
// FixedAccount
    // - account_number ( required and should be unique)
    // - balance ( required )
    // - interestRate ( required )
    // - startDate ( required )
    // - maturityDate (required )
    // - createdAt (required)
    // - updatedAt (required)
