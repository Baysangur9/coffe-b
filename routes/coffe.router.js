const { Router } = require("express");
const { coffeControllers } = require("../controllers/drinks.controlles");
const router = Router();

router.get("/", coffeControllers.getCoffe);
router.get("/:coffeId",  coffeControllers.getCoffeId);
router.get("/in-stock",  coffeControllers.getCoffeInStock);
router.post("/",  coffeControllers.addCoffe);
router.patch("/:coffeId",  coffeControllers.updateCoffe);
router.delete("/:coffeId",  coffeControllers.delCoffe);


module.exports = router;
