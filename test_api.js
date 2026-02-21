const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const API = process.env.GEMINI_API_KEY;
const model = "gemini-flash-latest"; // Or any other model from the list

console.log("Using API Key:", API ? (API.substring(0, 5) + "..." + API.substring(API.length - 5)) : "UNDEFINED");

async function test() {
    try {
        const res = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API}`,
            {
                contents: [{ parts: [{ text: "Say hello world" }] }]
            }
        );
        console.log("SUCCESS:", res.data.candidates[0].content.parts[0].text);
    } catch (err) {
        console.error("ERROR:", err.response?.status, JSON.stringify(err.response?.data, null, 2));
    }
}

test();
