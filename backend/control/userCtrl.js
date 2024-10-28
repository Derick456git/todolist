const todoModel = require("../model/userModel");

const addTodo = async (req, res) => {
  const { title, description, startDate, startTime } = req.body;

  try {
    const newTodo = await todoModel.create({
      title,
      description,
      startDate,
      startTime
    });

    res.status(201).json({
      message: "To-do item created successfully",
      data: newTodo
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create to-do item",
      error: error.message
    });
  }
};

module.exports = addTodo;
