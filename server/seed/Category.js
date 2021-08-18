//
//  Populate database with default data
//
const mongoose = require("mongoose");
const { Category } = require("../models/Category");

const categoryData = [
  {
    id: 10000,
    description: "Category 10000",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    id: 10001,
    description: "Category 10001",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    id: 10002,
    description: "Category 10002",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    id: 10003,
    description: "Category 10003",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    id: 10004,
    description: "Category 10004",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
];

const seedCategory = () => {
  await Category.deleteMany({});
  await Category.bulkCreate(categoryData);
};

module.exports = seedCategory;