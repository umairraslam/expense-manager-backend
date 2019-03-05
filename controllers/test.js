module.exports = {
    async testController(req, res) {
        return {
            message: "You passed this param *"+req.params.testParam+"*. Your API is up and running!"
        }
    }
}