const router = require("express").Router();
const controller = require("../controllers/bill.controller");

router.route("/")
    .get(controller.getNewBill)
    .post(controller.createBill)

router.route("/:id")
    .get(controller.findBillbyId)
    .put(controller.updateBill)
    .delete(controller.cancelBill)

router.route("/:id/valid")
    .put(controller.validBill)

router.route("/:id/done")
    .put(controller.doneBill)

router.route("/status/:id")
    .get(controller.nextStatus)
    
router.route("/uid/:uid")
    .get(controller.getBillByUID)

router.route("/uid/available/:uid")
    .get(controller.getAvailableBillByUID)

router.route("/sid/:sid")
    .get(controller.getBillBySID)

router.route("/sid/:sid/all")
    .get(controller.getAllBillBySID)

    module.exports = router;