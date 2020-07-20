var express = require("express");
var fs = require("fs").promises;
var app = express();
var usersRouter = require("./routes/users")

app.use(express.json());
app.use("/users", usersRouter);


app.listen(3000, async () => {
    try {
        console.log("Welcome to: Onlooker's notes API!");
        
    } catch (err) {

        console.log("Well, something went wrog: ", err);
    }

    
});