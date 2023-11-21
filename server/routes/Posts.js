const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    res.send('hello word')
})

//router.post()



module.exports = router