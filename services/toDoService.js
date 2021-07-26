const models = require("../sequelize").models;

async function createList(data) {
  return await models.toDoList.create(data, {
    include: {
      model: models.toDoListItem,
    },
  });
}

async function getAllLists() {
  return await models.toDoList.findAll({
    include: {
      model: models.toDoListItem,
    },
  });
}

async function getList(id) {
  return await models.toDoList.findOne({
    where: {
      id,
    },
    include: {
      model: models.toDoListItem,
    },
  });
}

async function updateList(id, data) {
  await models.toDoList.update(data, {
    where: {
      id,
    },
  });
  return await models.toDoList.findOne({
    where: {
      id,
    },
  });
}

async function deleteList(id) {
  const list = await models.toDoList.findOne({
    where: {
      id,
    },
  });
  await models.toDoList.destroy({
    where: {
      id,
    },
  });
  return list;
}

async function addItem(data) {
  return await models.toDoListItem.create(data);
}

async function updateItem(id, data) {
  return await models.toDoListItem.update(data, {
    where: {
      id,
    },
  });
  return await models.toDoListItem.findOne({
    where: {
      id,
    },
  });
}

async function removeItem(id) {
  const item = await models.toDoListItem.findOne({
    where: {
      id,
    },
  });
  await models.toDoListItem.destroy({
    where: {
      id,
    },
  });
  return item;
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
