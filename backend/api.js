const { default: axios } = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const api = express.Router();
api.use(express.json());
const apiKey = process.env.API_KEY;

// Get drinks from multiple ingredients
api.get("/ingredients/:ingredients", async (req, res) => {
  const { ingredients } = req.params;
  try {
    const response = await axios(
      `https://thecocktaildb.com/api/json/v2/${apiKey}/filter.php?i=${ingredients}`
    );
    const drinkList = await response.data.drinks;
    console.log(drinkList);
    res.json(drinkList);
  } catch (err) {
    console.log(err);
    res.status(404).send(`No drinks with your ingredients found.`);
  }
});

//Get specific drink information by id
api.get("/drinks/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios(
      `https://www.thecocktaildb.com/api/json/v2/${apiKey}/lookup.php?i=${id}`
    );
    const drink = response.data.drinks;
    res.json(drink);
  } catch {
    res.status(404).send(`No drink with id ${id} found.`);
  }
});
module.exports = api;
