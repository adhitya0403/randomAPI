import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  text: { type: String, required: true },
  category: { type: String, required: true },
});

const Quote = mongoose.model("Quote", quoteSchema, "quotes");

export default Quote;
