const { errors } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case errors.VALIDATION_ERROR:
            res.json({
                tital: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case errors.UNAUTHORIZED:
            res.json({
                tital: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case errors.FORBIDDEN:
            res.json({
                tital: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case errors.NOT_FOUND:
            res.json({
                tital: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case errors.SERVER_ERROR:
            res.json({
                tital: "Server Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.log("No errors!")
            break;
    }
};

module.exports = errorHandler;