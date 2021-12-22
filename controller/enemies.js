const express = require('express');
const Enemy = require('../models/Enemies');

const EnemyRouter = express.Router();

//I think we have to get,post,put, and delete with ids since towers and enemies are specific unless we just use one tower and enemy
EnemyRouter.get('/', (req, res, next) => {
    Enemy.find({})
    .then((enemies) => res.json(users))
    .catch(next);
})
EnemyRouter.post('/', (req, res, next) => {

})
EnemyRouter.put('/', (req, res, next) => {

})
EnemyRouter.delete('/', (req, res, next) => {

})