const { config } = require('../../config')
const Sentry = require("@sentry/node");

Sentry.init({ dsn: `https://${config.sentryDns}@o440916.ingest.sentry.io/${config.sentryId}`});

function logErrors(err, req, res, next) {
    Sentry.captureException(err);
    console.error(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    // catch errors for ajax request
    if (req.xhr) { 
        res.status(500).json({ err: err.message })
    } else {
        next(err)
    }
}

function errorHandler(err, req, res, next) {
    // catch errors while streaming
    if (res.headersSent) {
        next(err)
    }

    if(!config.dev) {
        delete err.stack
    }

    res.status(err.status || 500)
    res.render("error", { error: err }) 
}

module.exports = {
    logErrors,
    clientErrorHandler,
    errorHandler
}