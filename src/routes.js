const express = require("express")
const router = express.Router()
const EmailsController = require("./controllers/emails.controller")

router.get("/emails", EmailsController.index)
router.post("/emails", EmailsController.create)
router.get("/emails/:id", EmailsController.show)
router.put("/emails/:id", EmailsController.update)
router.delete("/emails/:id", EmailsController.destroy)

module.exports = router
