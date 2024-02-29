const express = require("express");
const router = express.Router();

//Get split list
//GET
router.route("/").get((req, res) => {
    res.status(200).json({response: `Get split list.`});
});

//Get individual split details
//GET
router.route("/:id").get((req, res) => {
    res.status(200).json({response: `Get individual split details of ${req.params.id}.`});
});

//Add split details
//POST
router.route("/").post((req, res) => {
    res.status(200).json({response: `Add split details.`});
});

//Edit split details
//PUT
router.route("/:id").put((req, res) => {
    res.status(200).json({response: `Edit split details of ${req.params.id}.`});
});

//Delete split details
//DELETE
router.route("/:id").delete((req, res) => {
    res.status(200).json({response: `Delete split details of ${req.params.id}.`});
});

//to export routers
module.exports = router;