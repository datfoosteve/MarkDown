const inquirer = require("inquirer");
const genReadme = require("./utils/generateMarkdown");
const fs = require("fs");


let obj = {};

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe this program?",
  },
  {
    type: "input",
    name: "install",
    message: "How do you install this program?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this program?",
  },
  {
    type: "input",
    name: "credits",
    message: "Give credit where its due! What entity would you like to include as a creditor",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data);
}

// TODO: Create a function to initialize app
async function init() {
    const userInput = await inquirer.prompt(questions);
    const readmeText = genReadme(userInput);

    
    writeToFile("./output/README.md",readmeText);

}

function startReadmeGen{
  const generateReadme = {
    type: "list",
    name: "userChoice",
    message: "Would you like to generate a README.md for a project?",
    choices: [
      new inquirer.Separator(" = Choices = "),
      {
        name: "Yes",
      },
      {
        name: "No",
      },
    ],
  };

  if (userChoice === 'No'){
    return;
  }else{ 
    init();
  }
}
// Function call to initialize app
startReadmeGen();
