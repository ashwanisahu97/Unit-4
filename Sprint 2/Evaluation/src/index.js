const express = require("express");
const app = express();
const connect = require("./configs/db");
app.listen(1234, async function () { 
    try {
        await connect();
    } catch (e) { 
        console.error("error:", e.message);
    }
    console.log("Listening on port number 1234");
})