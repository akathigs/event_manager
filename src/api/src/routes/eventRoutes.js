import express from "express"
import * as eventController from "../controllers/eventController.js"

const router = express.Router()

router.get("/", eventController.getAllEvents)
router.post("/", eventController.createEvent)
router.get("/:id", eventController.getById)
router.put("/:id/:data", eventController.updateEvent)
router.delete("/:id", eventController.deleteEvent)

export default router