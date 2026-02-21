function buildPrompt(topic) {
    return `
Generate 5 MCQs on ${topic}.
Return valid JSON array only.
Each question must have:
- question
- options (4)
- answer
`;
}

module.exports = { buildPrompt };