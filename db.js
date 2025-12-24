const Sequelize = require("sequelize");
const config = require("./libs/config");

let sequelize = null;

module.exports = (app) => {
    if (!sequelize) {
        sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );
    }

    app.db = sequelize;
};
