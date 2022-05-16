const {Vehicle} = require("../models");

const vehicles = [
    {
        driverName: "Ash",
        liscencePlate: "CATCHEM1"
    },
    {
        driverName: "Jake",
        liscencePlate: "STFARM"
    },
    {
        driverName: "Misty",
        liscencePlate: "WENLK903"
    },
    {
        driverName: "Lex",
        liscencePlate: "WIV098JI"
    }
];

const seedVehicles = () => Vehicle.bulkCreate(vehicles);

module.exports = seedVehicles;