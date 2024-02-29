const express = require("express");
const router = express.Router();

//Get spend list
//GET
router.route("/").get((req, res) => {
    res.status(200).json({response: `Get spend list.`});
});

//Get individual spend details
//GET
router.route("/:id").get((req, res) => {
    res.status(200).json({response: `Get individual spend details of ${req.params.id}.`});
});

//Add spend details
//POST
router.route("/").post((req, res) => {
    res.status(200).json({response: `Add spend details.`});
});

//Edit spend details
//PUT
router.route("/:id").put((req, res) => {
    res.status(200).json({response: `Edit spend details of ${req.params.id}.`});
});

//Delete spend details
//DELETE
router.route("/:id").delete((req, res) => {
    res.status(200).json({response: `Delete spend details of ${req.params.id}.`});
});

//to export routers
module.exports = router;