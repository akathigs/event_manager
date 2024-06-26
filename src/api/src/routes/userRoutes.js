import express from "express"
import * as userController from "../controllers/userController.js"
import * as authController from "../controllers/authController.js"

const router = express.Router()

router.get("/", userController.getAllUsers)
router.post("/",userController.createUser)
router.get("/:id", userController.getById)
router.put("/:id/:data", userController.updateUser)
router.delete("/:id", userController.deleteUser)

router.post("/login", authController.login)
router.post("/private", authController.verificarToken)

export default router