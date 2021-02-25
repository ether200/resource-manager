const express = require("express");
const { protect } = require("../controllers/userController");
const {
  createResource,
  deleteResource,
  findResources,
  updateResource,
} = require("../controllers/resourceController");

const router = express.Router();

router.post("/", protect, createResource);
router.get("/:subjectId", protect, findResources);
router.delete("/:id", protect, deleteResource);
router.put("/:id", protect, updateResource);

module.exports = router;
