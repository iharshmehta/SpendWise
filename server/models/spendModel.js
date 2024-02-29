const mongoose = require("mongoose");

const spendSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add name"]
        },
        phone: {
            type: Number,
            required: [true, "Please add Phone"]
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("SpendModel", spendSchema);