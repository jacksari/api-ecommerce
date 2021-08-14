const ErrorHandler = (req, res, status = 500, message = 'Interval server error') => {
    const err = {
        statusCode: status,
        message: message
    };
    res.status(err.statusCode).json({
        success: false,
        error: err
    })
}

module.exports = ErrorHandler;