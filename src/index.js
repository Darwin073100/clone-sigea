const express = require('express');
const router = require('./router/index');
const static = require('./config/index');

const app = express();
const PORT = 3000;

app.get('/',(req, res)=>{
    res.send('<h1>Home</h1>');
});

router(app);
static(app);

app.listen(PORT, console.log('http://localhost:'+PORT+'/login'));