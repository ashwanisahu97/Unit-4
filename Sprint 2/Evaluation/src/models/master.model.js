
const mongoose = require("mongoose");
const masterSchema = new mongoose.Schema({
    balance: {
        type:Number,required:true,
    },
    createdAt: {
        type:Number,required:true,
    },
    updatedAt: {
        type:Number,required:true,
    },
})

// MasterAccount
//     - balance (required) This is the total balance that the person has in the bank
//     - createdAt (required)
//     - updatedAt(required)