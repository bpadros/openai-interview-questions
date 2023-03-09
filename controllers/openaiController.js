const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generatequestion = async (req, res) => {

  const {prompt} = req.body

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
        // "Create a list of 8 questions for my interview with a science fiction author:",
      n: 5,
      temperature: 0.5,
      max_tokens: 1500,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    const questions = response.data.choices[0].text;

    res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({
      succes: false,
      error: "The questions could not be generated",
    });
  }
};

module.exports = { generatequestion };
