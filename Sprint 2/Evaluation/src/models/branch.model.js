
const mongoose = require("mongoose");
const branchSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        ifsc: { type: String, required: true },
        micr: { type: Number, required: true },
        createdAt: { type: String, required: true },
        updatedAt: { type: String, required: true },

    }
)