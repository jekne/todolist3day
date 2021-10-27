"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoItems", [
      {
        task: "learn database",
        deadline: "today",
        todoListId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Keep studin",
        deadline: "this morning",
        todoListId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "ciclyng",
        deadline: "after lunch",
        todoListId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "go for a nap",
        deadline: "tomorrow",
        todoListId: 4,
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
    await queryInterface.bulkDelete("todoItems");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
