
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        middleName: { type: String, },
        age: { type: String, required: true },
        email: { type: String, required: true },
        address: { type: String, required: true },
        gender: { type: String, default: "female" },
        type: { type: String, required: true },
        createdAt: { type: String, required: true },
        updatedAt: { type: String, required: true },
    }
        
);

// We will create a Banking System

// We need to create the following Schemas

// - User
//     - firstName (required)
//     - middleName (optional)
//     - lastName (required)
//     - age (required)
//     - email (required )
//     - address ( required )
//     - gender ( optional and should default to Female )
//     - type (optional and it can take value of customer or employee and if not provided then default to customer )
//     - createdAt (required)
//     - updatedAt (required)