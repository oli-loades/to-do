const toDoService = require("../services/toDoService");

async function createList(req, res, ext) {
  const data = req.body;
  try {
    const list = await toDoService.createList(data);
    res.status(200).json(list);
  } catch (err) {
    console.log(err.message);
    req.status(500).send(err.message);
  }
}

async function getAllLists(req, res, ext) {
  try {
    const list = await toDoService.getAllLists();
    res.status(200).json(list);
  } catch (err) {
    console.log(err.message);
    req.status(500).send(err.message);
  }
}

async function getList(req, res, ext) {
  const id = req.params.id;
  try {
    const list = await toDoService.getList(id);
    res.status(200).json(list);
  } catch (err) {
    console.log(err.message);
    req.status(500).send(err.message);
  }
}

async function updateList(req, res, ext) {
  const id = req.params.id;
  const data = req.body;
  try {
    const list = await toDoService.updateList(id, data);
    res.status(200).json(list);
  } catch (err) {
    console.log(err.message);
    req.status(500).send(err.message);
  }
}

async function deleteList(req, res, ext) {
  const id = req.params.id;
  try {
    const list = await toDoService.deleteList(id);
    res.status(200).json(list);
  } catch (err) {
    console.log(err.message);
    req.status(500).send(err.message);
  }
}

async function addItem(req, res, ext) {
  const data = req.body;
  try {
    const list = await toDoService.addItem(data);
    res.status(200).json(list);
  } catch (err) {
    console.log(err.message);
    req.status(500).send(err.message);
  }
}

async function updateItem(req, res, ext) {
  const id = req.params.id;
  const data = req.body;
  try {
    const list = await toDoService.updateItem(id, data);
    res.status(200).json(list);
  } catch (err) {
    console.log(err.message);
    req.status(500).send(err.message);
  }
}

async function removeItem(req, res, ext) {
  const id = req.params.id;
  try {
    const list = await toDoService.removeItem(id);
    res.status(200).json(list);
  } catch (err) {
    console.log(err.message);
    req.status(500).send(err.message);
  }
}

module.exports = {
  createList,
  getAllLists,
  getList,
  updateList,
  deleteList,
  addItem,
  updateItem,
  removeItem,
};
