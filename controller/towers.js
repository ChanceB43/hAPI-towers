const express = require('express');
const Tower = require('../models/Towers');

const TowerRouter = express.Router();

//I think we have to get,post,put, and delete with ids since towers and enemies are specific unless we just use one tower and enemy
TowerRouter.get('/', (req, res, next) => {
    Tower.find({})
    .then((towers) => res.json(users))
    .catch(next);
})
TowerRouter.post('/', (req, res, next) => {

})
TowerRoute.put('/', (req, res, next) => {

})
TowerRoute.delete('/', (req, res, next) => {
    
})