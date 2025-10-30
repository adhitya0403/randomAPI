import express from "express";
import {
  getAllLowerCaseQuotes,
  getAllUpperCaseQuotes,
  getAllMixedCaseQuotes,
  getRandomQuote,
  getRandomLowerCaseQuote,
  getRandomUpperCaseQuote,
  getRandomMixedCaseQuote,
  getRandomBlindQuote
} from "../controllers/quotesController.js";

const quoteRouter = express.Router();

quoteRouter.get("/all/lower", getAllLowerCaseQuotes);
quoteRouter.get("/all/upper", getAllUpperCaseQuotes);
quoteRouter.get("/all/mixed", getAllMixedCaseQuotes);
quoteRouter.get("/random", getRandomQuote);
quoteRouter.get("/random/lower", getRandomLowerCaseQuote);
quoteRouter.get("/random/upper", getRandomUpperCaseQuote);
quoteRouter.get("/random/mixed", getRandomMixedCaseQuote);
quoteRouter.get("/random/short", getRandomBlindQuote);


export default quoteRouter;
