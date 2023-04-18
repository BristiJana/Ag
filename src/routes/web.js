import express from "express";
import chatbotController from "../controllers/chatbotController.js";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", chatbotController.test);
  router.get("/webhook", chatbotController.getWebhook);
  router.post("/webhook", chatbotController.postWebhook);

  // Define a default route that matches all incoming requests
  function handleMessage(sender_psid, received_message) {}

  // Handles messaging_postbacks events
  function handlePostback(sender_psid, received_postback) {}

  // Sends response messages via the Send API
  function callSendAPI(sender_psid, response) {}
  return app.use("/", router);
};

export default initWebRoutes;
