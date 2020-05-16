const router = require('express').Router();

router.get('/hello-resad', function (req, res, next) {
    res.set({ 'X-Api-Response': 'apiSecure' })
    res.set({ 'X-Header-Authorization': req.headers['authorization'] })
    res.status(200).json({
        item: 'Yoxdu'
    })
})


module.exports = router;
