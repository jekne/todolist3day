"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Johann",
        email: "JK@dotemail",
        phone: "1111",
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Neto",
        email: "NEETO@dotemail",
        phone: "22222",
        password: "5678",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "mother",
        email: "Mother@hotemail",
        phone: "3333",
        password: "9101",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "father",
        email: "father@hotemail",
        phone: "4444",
        password: "7683",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
