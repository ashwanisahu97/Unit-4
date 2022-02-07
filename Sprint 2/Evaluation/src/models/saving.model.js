
const mongoose = require("mongoose");
const savingSchema = new mongoose.Schema({
    account_number: {
        type: String, required: true,
    },
    balance: {
        type: Number, required: true,
    },
    interestRate: {
        type: Number, required: true,
    },
    createdAt: {
        type: String, required: true,
    },
    updatedAt: {
        type: String, required: true,
    }
})

// SavingsAccount
// - account_number ( required and should be unique)
// - balance ( required )
// - interestRate ( required )
// - createdAt (required)
// - updatedAt (required)