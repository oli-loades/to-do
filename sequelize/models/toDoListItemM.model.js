const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  class ToDoListItem extends Model {
    static associate(models) {
      ToDoListItem.belongsTo(models.toDoList, {
        foreignKey: "listId"
      });
    }
  }
  ToDoListItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      priority: {
        type: DataTypes.INTEGER,
      },
      listId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "toDoListItem",
    }
  );
  return ToDoListItem;
};
