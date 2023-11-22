const router = require('express').Router();
const cart = require('../controllers/cart.controller')

router.route('/:uid')
        .get(cart.findByUID)
        .post(cart.addItem)
        .put(cart.updateCart)

module.exports = router