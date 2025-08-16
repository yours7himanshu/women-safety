const express = require('express');

const contactRouter = express.Router();


contactRouter.post("/contact",contactController);



