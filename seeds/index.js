const Vehicles = require("./vehicle");
const Ticket = require("./ticket");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force : true});
    console.log("\n------- DATABASE SYNCED \n--------");
    await Vehicles();
    console.log("\n------- VEHICLES SYNCED \n--------");
    await Ticket();
    console.log("\n------- TICKETS SYNCED \n--------");
    process.exit(0);
}

seedAll();