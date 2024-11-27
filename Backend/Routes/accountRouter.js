const express = require("express");
const { balance, transferAmount } = require("../controller/accountController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const accountRouter = express.Router();


accountRouter.get("/balance", authMiddleware, balance);



accountRouter.post("/transfer",authMiddleware,transferAmount );

module.exports = {
    accountRouter,
};
