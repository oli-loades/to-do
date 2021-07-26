const router = require("express").Router();
const toDoController = require("../../controllers/toDoController");
const {Validator} = require("express-json-validator-middleware");
const schemas = require("../../schemas/toDo.schema");

const { validate } = new Validator();

router.post(
  "/",
  validate({ body: schemas.listSchema }),
  toDoController.createList
);

router.get("/all", toDoController.getAllLists);

router.get("/:id", toDoController.getList);

router.put(
  "/:id",
  validate({ body: schemas.listSchema }),
  toDoController.updateList
);

router.delete("/:id", toDoController.deleteList);

router.post(
  "/item",
  validate({ body: schemas.itemSchema }),
  toDoController.addItem
);

router.put(
  "/item/:id",
  validate({ body: schemas.itemSchema }),
  toDoController.updateItem
);

router.delete("/item/:id", toDoController.removeItem);

module.exports = router;
