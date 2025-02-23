require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Message = require("./models/message");
const { getAIResponse } = require("./service/llmService");  // Import the function


const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// POST API to receive user's question
app.post("/api/question", (req, res) => {
    const { question } = req.body;
    
    console.log("Received question:", question); // Just to check in the backend logs
    
    res.json({ hint: question });
});


app.post("/api/messages", async (req, res) => {
    const { author, message } = req.body;

    // Validate the author
    if (!['user', 'AI'].includes(author)) {
        return res.status(400).json({ error: "Author must be either 'user' or 'AI'" });
    }

    try {
        // If the author is the user, send the query to LLM API
        if (author === 'user') {
            // Send the user message to LLM
            const aiAnswer = await getAIResponse(message);
            // Save the user question in the database
            const userMessage = new Message({
                author: 'user',
                message: message
            });
            await userMessage.save();

            // Save the AI response in the database
            const aiMessageObj = new Message({
                author: 'AI',
                message: aiAnswer
            });
            await aiMessageObj.save();

            // Send AI's answer back to frontend
            console.log(aiAnswer)
            res.json({ answer: aiAnswer });
        }
    } catch (err) {
        console.error('Error while processing the request:', err);
        res.status(500).json({ error: 'Failed to process the question' });
    }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
