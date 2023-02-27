const express = require('express');
const path = require('../../path');

const static = (app)=>{
    app.use(express.static('public'))
    app.use(express.static('files'))
    app.use('/src', express.static(path+'\\src'))
}

module.exports = static;