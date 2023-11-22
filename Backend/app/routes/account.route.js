const router = require("express").Router();
const controller = require("../controllers/account.controller");

router.route("/")
    .post(controller.createAccount);

router.route("/:id")
  .get(controller.findAccountbyId)
  .delete(controller.deleteAccount)
  .put(controller.updateAccount)

router.route("/login")
  .post(controller.login)

module.exports = router;
