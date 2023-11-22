const router = require("express").Router();
const controller = require("../controllers/billdetail.controller");

router.route("/:id")
    .put(controller.updateDetailBill)

module.exports = router;
