const logger = (req, res, next) => {
    console.log("request receied")
    next()

}
module.exports = logger