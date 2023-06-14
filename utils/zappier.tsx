const zapierSdk = require('zapier-platform-core');
//const firebase = require('firebase');
import {db} from './firebase'

const zapierRun = async (userInput:any) => {
  const bundle = {
    inputData: {
      prompt: userInput, // Captured user data passed as input prompt
    },
  };

  // Create an instance of the Zapier App to make API calls
  const app = new zapierSdk.App();
  const chatGptIntegration = app.getIntegration('chat_gpt_integration'); // Replace 'chat_gpt_integration' with your specific integration ID

  // Read user data from Firestore
  const userRef = db.collection('users').doc('USER_ID'); // Replace 'USER_ID' with the actual user ID
  const userData = await userRef.get();

  // Access specific fields from the user data
  const name = userData.get('name');
  const age = userData.get('age');
  // ...

  // Append the user data to the input prompt
  const promptWithUserData = `${userInput} My name is ${name} and I am ${age} years old.`;

  // Add the updated prompt to the bundle inputData
  bundle.inputData.prompt = promptWithUserData;

  // Make the API call to ChatGPT
  const response = await chatGptIntegration.perform('makeApiCall', bundle);

  // Extract and return the generated text from the API response
  const generatedText = response.data.generatedText;

  return generatedText;
};

module.exports = {
  zapierRun,
};
