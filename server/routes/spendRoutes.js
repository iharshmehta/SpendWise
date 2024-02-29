const express = require("express");
const router = express.Router();
const { 
    getSpendList,
    getIndividualSpendDetails,
    addSpendDetails,
    editSpendDetails,
    deleteSpendDetails
} = require("../controllers/spendController");

//Get spend list
//GET
router.route("/").get(getSpendList);

//Get individual spend details
//GET
router.route("/:id").get(getIndividualSpendDetails);

//Add spend details
//POST
router.route("/").post(addSpendDetails);

//Edit spend details
//PUT
router.route("/:id").put(editSpendDetails);

//Delete spend details
//DELETE
router.route("/:id").delete(deleteSpendDetails);

//to export routers
module.exports = router;