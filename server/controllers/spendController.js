const asyncHandler = require("express-async-handler");
const SpendModel = require("../models/spendModel");

//Get spend list
//GET /spendwise/spend
const getSpendList = asyncHandler( async (req, res) => {
    const spend = await SpendModel.find();
    res.status(200).json(spend);
    res.status(200).json({response: `Get spend list.`});
});

//Get individual spend details
//GET /spendwise/spend/:id
const getIndividualSpendDetails = asyncHandler( async (req, res) => {
    res.status(200).json({response: `Get individual spend details of ${req.params.id}.`});
});

//Add spend details
//POST /spendwise/spend
const addSpendDetails = asyncHandler( async (req, res) => {
    console.log(req.body);
    const {name, phone} = req.body;
    if(!name || !phone) {
        res.status(400);
        throw new Error("Empty data in the request");
    }
    res.status(201).json({response: `Add spend details.`});
});

//Edit spend details
//PUT /spendwise/spend/:id
const editSpendDetails = asyncHandler( async (req, res) => {
    res.status(201).json({response: `Edit spend details of ${req.params.id}.`});
});

//Delete spend details
//DELETE /spendwise/spend/:id
const deleteSpendDetails = asyncHandler( async (req, res) => {
    res.status(201).json({response: `Delete spend details of ${req.params.id}.`});
});

module.exports = {
    getSpendList,
    getIndividualSpendDetails,
    addSpendDetails,
    editSpendDetails,
    deleteSpendDetails
}