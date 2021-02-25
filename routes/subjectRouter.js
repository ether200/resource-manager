const express = require("express");
const { protect } = require("../controllers/userController");
const {
  createSubject,
  deleteSubject,
  findSubject,
  findSubjectByUser,
  updateSubject,
} = require("../controllers/subjectController");

const router = express.Router();

router.post("/", protect, createSubject);
router.get("/", protect, findSubjectByUser);
router.get("/:id", protect, findSubject);
router.delete("/:id", protect, deleteSubject);
router.put("/:id", protect, updateSubject);

module.exports = router;
