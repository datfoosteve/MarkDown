const inquirer = require("inquirer");
const genReadme = require("./utils/generateMarkdown");
const fs = require("fs");

//need to slow down prompts
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

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
    message: "What is the title Program Application?",
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
      console.clear();
      console.log("Answers recorded");
      sleep(5000);
      console.clear();
      console.log("Generating Markdown...");
      sleep(5000);
      writeToFile("./output/README.md", readmeText);
      console.clear();
      console.log("Generation Complete");
      sleep(5000);
      console.log("Search Distribution Folder for the Generated file");
    }

  )
}

function startReadme() {
  inquirer.prompt(askUserStart).then((userAnswer) => {
    if (userAnswer.userChoice === "Yes"){
      console.clear();
      console.log("Initilizing Program: Markdown Generator");
      init();
    } else if (userAnswer.userChoice === "No"){
      sleep(5000);
      console.clear();
      console.log("User Rejected MarkDown Generation: Closing");
      return false;
    } else {
      console.log("Error");
    }
  });
}
// Function call to initialize app
console.log("Welcome");
sleep(5000);
startReadme();