const Sequelize = require('sequelize');
const sequelize = new Sequelize({
	host: "localhost",
	port: 3307,
	dialect: 'mysql',
	username: "root",
	password: "000000",
	database: "node",
	pool: {
		max: 10,
		min: 0
	}
});

(async () => {
	await sequelize.authenticate();
	console.log("success");
})();

module.exports = {sequelize, Sequelize};