//require("dotenv").config();

//import { myAPI } from "./apiHere.js";

const { myAPI } = require("./apiHere.js");

const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${myAPI}&q=pokemon&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

async function getGit() {
  return;
}
console.log(myAPI);
console.log(endpoint);
// Print out value of API key stored in .env file
console.log(process.env.API_KEY);
