const axios = require('axios');

// Function to communicate with LLM API
async function getAIResponse(userMessage) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/assistant', {
            query: userMessage
        });

        // Assuming the response has 'answer' field
        const aiAnswer = response.data.response;
        return aiAnswer;
    } catch (err) {
        console.error('Error communicating with LLM:', err);
        throw new Error('Failed to get response from LLM');
    }
}

module.exports = { getAIResponse }