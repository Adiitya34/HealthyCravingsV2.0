const express = require("express");
const {summaryController,paragraphController,chatbotController} = require("../controllers/openaiController");

const router = express.Router();

//route
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);


module.exports = router;