const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const multer = require("../middlewares/multer");
const { verifyAdmin } = require("../middlewares/PermissionHandler");
const { cloudinaryUpload } = require("../middlewares/CloudinaryUpload");

router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getUser);

router.post(
    "/",
    verifyAdmin,
    multer.single("image"),
    cloudinaryUpload,
    UserController.createUser
);

router.put("/:id", verifyAdmin, UserController.updateUser);
router.patch("/:id", verifyAdmin, UserController.updateUser);
router.delete("/:id", verifyAdmin, UserController.deleteUser);

module.exports = router;