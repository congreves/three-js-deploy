import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

// To specify the path of the .env file

dotenv.config();

// set up some routes

const router = express.Router();

// set up openai config to access the api key
const config = new Configuration({ apiKey: process.env.VITE_OPENAI_API_KEY, });

// utilize config and merge it with your instance of openai api

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

// new route to be able to pass the prompt from the client to the server
router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });
    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
