require("dotenv").config();

//import { myAPI } from "./apiHere.js";

const { myAPI } = require("./apiHere.js");

//const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${myAPI}&q=pokemon&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

async function getImage(query) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${myAPI}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const response = await fetch(endpoint);
  const dataRes = await response.json();

  const url = dataRes.data[0].url;
  console.log(url);
}
getImage("Minecraft");
// Print out value of API key stored in .env file
// It works but you just need 'npm install dotenv'
console.log(process.env.API_KEY);
console.log(myAPI);
