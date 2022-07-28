"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "prescriptions",
      [
        {
          id: 1,
          name: ["Lidocaine Viscous"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: ["Mucinex"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: ["Aspirin"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: ["Rich Almond Perfecting Makeup Broad Spectrum SPF 25"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: ["VITAMIN CREAM"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: ["NITRO-DUR"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: ["Vanilla Fig Hand Sanitizer"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: ["NEXIUM"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: ["Clear Defense"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: ["DELUXE Dish DETERGENT"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          name: ["Acyclovir"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          name: ["Palmers Amaranth"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          name: ["Emtriva"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("prescriptions", null, {});
  },
};
