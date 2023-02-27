const express = require('express');
const path = require('../../path');
const router = express.Router();

router.get('/', (req, res, next)=>{
    try {
        res.sendFile(path+'\\public\\index.html');
    } catch (error) {
        next(error);
    }
});

module.exports = router;

