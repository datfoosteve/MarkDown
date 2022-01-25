const inquirer = require("inquirer");
const genReadme = require("./utils/generateMarkdown");
const fs = require("fs");

let obj = {};

const askUserStart = {
  type: "list",
  name: "userChoice",
  message: "Would you want this program to Generate you a Readme?",
  choices: [{
      name: "Yes",
    },
    {
      name: "No",
    },
  ],
};

// Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title?",
  },
  {
    type: "confirm",
    name: "logo",
    message: "Does this program have a logo?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe this program?",
  },
  {
    type: "confirm",
    name: "visual",
    message: "Are you including a visual description?",
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
    message: "Give credit where its due! What entity would you like to include as a creditor/contributer/donor. If there isnt, Put yourself down.",
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to include for this program?",
    choices: [
      new inquirer.Separator(
        " =============================================== "
      ),
      {
        name: "MIT License",
      },
      {
        name: "GNU Lesser General Public License v3.0",
      },
      {
        name: "Mozilla Public License 2.0",
      },
      {
        name: "GNU Affero General Public License v3.0",
      },
      {
        name: "The Unlicense",
      },
      {
        name: "Apache License 2.0",
      },
      {
        name: "GNU General Public License v3.0",
      },
      {
        name: "WTFPL",
      },
      {
        name: "None",
      },
      new inquirer.Separator(
        " =============================================== "
      ),
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((userAnswer) => {
      const readmeText = genReadme(userAnswer);
      writeToFile("./output/README.md", readmeText);
    }

  )
}

function startReadme() {
  inquirer.prompt(askUserStart).then((userAnswer) => {
    if (userAnswer.userChoice === "Yes"){
      init();
    } else if (userAnswer.userChoice === "No"){
      console.log("User Rejected MarkDown Generation: Closing");
      return false;
    } else {
      console.log("Error");
    }
  });
}
// Function call to initialize app
startReadme();