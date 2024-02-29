const mongoose = require("mongoose");

const connectMongoDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MongoDB_Connection_String);
        console.log(
            "Database connected:",
            connect.connection.host,
            connect.connection.name
        );
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectMongoDB;