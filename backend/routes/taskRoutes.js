const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// Admin only: create task
router.post("/", auth(["admin"]), async (req, res) => {
  try {
    const { title, status, deadline, project, assignedTo } = req.body;

    if (!title || !project) {
      return res.status(400).json({
        message: "Title and project are required"
      });
    }

    const task = await Task.create({
      title,
      status,
      deadline,
      project,
      assignedTo,
      createdBy: req.user.id
    });

    res.status(201).json({
      message: "Task created successfully",
      task
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin/Member: get tasks
router.get("/", auth(), async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("assignedTo", "name email role")
      .populate("project", "name")
      .populate("createdBy", "name email");

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin only: update task status
router.put("/:id", auth(["admin"]), async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
        deadline: req.body.deadline,
        assignedTo: req.body.assignedTo
      },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({
      message: "Task updated successfully",
      task
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin only: delete task
router.delete("/:id", auth(["admin"]), async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;