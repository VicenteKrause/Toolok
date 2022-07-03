const express = require("express");
const microSchema = require('../models/micros');

const router = express.Router();

router.post("/micros", (req, res) => {
    const micro = microSchema(req.body);
    micro
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/micros", (req,res) => {
    microSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    

});

module.exports = router;