const router = require('express').Router();
const controller = require('../controllers/type.controller')

router.route('/')
        .get(controller.getAll)

module.exports = router