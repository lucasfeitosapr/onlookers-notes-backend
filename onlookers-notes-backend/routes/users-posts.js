var express = require("express");
var router = express.Router();
var fs = require("fs").promises;

router.use(express.json());

router.get("/", async (req, res) => {
    try{

        let data = await fs.readFile(global.fileName, "utf8");
        let jsonResponse = JSON.parse(data);
        res.send(jsonResponse);
        
    }catch (err) {
        res.status(err.status).send({ error: err.message });
    }
    
});

router.get("/users-posts", async (req, res) => {
    try{

        res.send("Ok")
        
    }catch (err) {
        res.status(400).send({ error: err.message });
    }
    
});

module.exports = router;