var express = require("express");
var router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
    try{
        res.send("Get went fine here.");
    }catch (err) {
        res.status(400).send({ error: err.message });
    }
    
});

module.exports = router;