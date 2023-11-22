const router = require("express").Router();
const controller = require("../controllers/product.controller");

router.route("/")
    .get(controller.getAll)
    .post(controller.createProduct);

router.route("/:id")
    .delete(controller.deleteProduct)
    .put(controller.updateProduct)
    .get(controller.findProductbyId);

router.route('/type/:type')
    .get(controller.findProductbyType)

router.route('/name')
    .post(controller.findProductByName)

module.exports = router;
