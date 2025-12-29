const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "ntask",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql",
    }
);

sequelize.authenticate()
.then((function() {
    console.log("Banco de dados conectado com sucesso!");
})).catch(function(error) {
    console.log("Erro ao se cobectar no banco de dados", error);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}