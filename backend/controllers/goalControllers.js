const asyncHandler = require("express-async-handler");

// @desc Get Goals
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc Set Goals
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  res.status(200).send({ message: "Set goals" });
});

// @desc Update Goals
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).send({ message: `Update goals at ${req.params.id}` });
});

// @desc Delete Goals
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
