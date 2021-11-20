const { CustomAPIError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof Error || err instanceof CustomAPIError) {
        return res.status(400).json({ message: err.message ? err.message : err })
    }
    return res.status(500).json({ message: 'Something Went wrong.', data: err })
}

module.exports = { errorHandlerMiddleware }