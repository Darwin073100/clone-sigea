const express = require('express');
const loginRouter = require('./login.router');

function router(app){
    const router = express.Router();
    app.use(router);
    router.use('/login', loginRouter);
  }
  
  module.exports = router;
  