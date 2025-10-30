import Quote from "../models/Quote.js";

const getRandomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getAllLowerCaseQuotes = async (req, res) => {
  try {
    const lowerQuotes = await Quote.find(
      { category: "lower" },
      { _id: 0 }
    ).sort({ id: 1 });
    res.status(200).json(lowerQuotes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quotes" });
  }
};

const getRandomLowerCaseQuote = async (req, res) => {
  try {
    const quotes = await Quote.find({ category: "lower" }, { _id: 0 });
    if (!quotes.length)
      return res.status(404).json({ message: "No quotes found" });
    res.status(200).json(getRandomFromArray(quotes));
  } catch (error) {
    res.status(500).json({ message: "Error fetching random quote" });
  }
};

const getAllUpperCaseQuotes = async (req, res) => {
  try {
    const upperQuotes = await Quote.find(
      { category: "upper" },
      { _id: 0 }
    ).sort({ id: 1 });
    res.status(200).json(upperQuotes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quotes" });
  }
};

const getRandomUpperCaseQuote = async (req, res) => {
  try {
    const quotes = await Quote.find({ category: "upper" }, { _id: 0 });
    if (!quotes.length)
      return res.status(404).json({ message: "No quotes found" });
    res.status(200).json(getRandomFromArray(quotes));
  } catch (error) {
    res.status(500).json({ message: "Error fetching random quote" });
  }
};

const getAllMixedCaseQuotes = async (req, res) => {
  try {
    const mixedQuotes = await Quote.find(
      { category: "mixed" },
      { _id: 0 }
    ).sort({ id: 1 });
    res.status(200).json(mixedQuotes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quotes" });
  }
};

const getRandomMixedCaseQuote = async (req, res) => {
  try {
    const quotes = await Quote.find({ category: "mixed" }, { _id: 0 });
    if (!quotes.length)
      return res.status(404).json({ message: "No quotes found" });
    res.status(200).json(getRandomFromArray(quotes));
  } catch (error) {
    res.status(500).json({ message: "Error fetching random quote" });
  }
};

const getRandomQuote = async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    if (count === 0)
      return res.status(404).json({ message: "No quotes found" });
    const random = Math.floor(Math.random() * count);
    const randomQuote = await Quote.findOne({}, { _id: 0 }).skip(random);
    res.status(200).json(randomQuote);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quotes" });
  }
};

const getRandomBlindQuote = async (req, res) => {
  try {
    const quotes = await Quote.find({ category: "blind" }, { _id: 0 });
    if (!quotes.length)
      return res.status(404).json({ message: "No quotes found" });
    res.status(200).json(getRandomFromArray(quotes));
  } catch (error) {
    res.status(500).json({ message: "Error fetching random quote" });
  }
};

export {
  getAllLowerCaseQuotes,
  getRandomLowerCaseQuote,
  getAllUpperCaseQuotes,
  getRandomUpperCaseQuote,
  getAllMixedCaseQuotes,
  getRandomMixedCaseQuote,
  getRandomQuote,
  getRandomBlindQuote,
};
