const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");
const config = require("../config");

const initSequelize = (dbConfig) => {
  const sequelize = new Sequelize(
    dbConfig.name,
    dbConfig.user,
    dbConfig.password,
    {
      host: dbConfig.host,
      dialect: dbConfig.dialect,
      port: dbConfig.port,
      define: {
        timestamps: dbConfig.useTimestamps,
      },
      dialectOptions: {
        socketPath: dbConfig.socketPath,
      },
    }
  );
  initModels(sequelize);
  return sequelize;
};

const initModels = (sequelize) => {
  let models = [];
  let dirname = __dirname + "/models";
  fs.readdirSync(dirname).forEach((file) => {
    let model = require(path.join(dirname, file))(sequelize);
    models.push(model);
  });

  for (let model of models) {
    model.associate(sequelize.models);
  }
};

const dbConfig = config.database;
const sequelize = initSequelize(dbConfig);

module.exports = sequelize;
