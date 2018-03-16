export default (req, res, next) => {
    if (req.body.token === process.env.verification_token) {
        next()
    } else {
        res.sendStatus(403)
    }
}
