const express = require('express');
const app = express();
const itemRoutes = require('./router')

app.use("/items", itemRoutes)


app.listen(3000, function() {
    console.log("App listening on port 3000")
});
