const express = require("express");
const routes = require("./routes");
const sequelize = require("./sequelize");
const app = express();

app.use(express.json());

app.use("/", routes);

app.listen(8081, () => {
  sequelize.sync({ force: true});
  console.log(`server listening at port 8081`);
});
