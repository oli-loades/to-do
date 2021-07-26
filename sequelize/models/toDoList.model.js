const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  class ToDoList extends Model {
    static associate(models) {
      ToDoList.hasMany(models.toDoListItem, {
        foreignKey: "listId"
      });
    }
  }
  ToDoList.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "toDoList",
    }
  );
  return ToDoList;
};
