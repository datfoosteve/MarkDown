const inquirer = require("inquirer");
const genReadme = require("./utils/generateMarkdown");
const genTableReadme = require("./utils/generateTableMarkdown");
const fs = require("fs");

/* This code is used to ask the user if they want to generate a README.md file. */
const askUserStart = {
  type: "list",
  name: "userChoice",
  message: "Welcome. Would you want this program to generate you a README.md File?",
  choices: [{
      name: "Yes",
    },
    {
      name: "No",
    },
  ],
};

const questionConfirms = 

// an array of questions for user input
const questions = [
  {
    type: 'checkbox',
    message: 'Preprocess inquiry Question: Please Select the sections that you want to Generate in your README.md .',
    name: 'qConfirm',
    choices: [
      {
        name: 'titleConfirm',
        message: "A title Section"
      },
      {
        name: 'logoConfirm',
        message: "A Program logo Section"
      },
      {
        name: 'descriptionConfirm',
        message: "A Program Description Section"
      },
      {
        name: 'installConfirm',
        message: "A Program install Section"
      },
      {
        name: 'usageConfirm',
        message: "A Program Usage Section"
      },
      {
        name: 'visualConfirm',
        message: "A Program Visual Section"
      },
      {
        name: 'linkConfirm',
        message: "A Program Link Section"
      },
      {
        name: 'creditConfirm',
        message: "A Contribution/Credit Section"
      },
      {
        name: 'usernameConfirm',
        message: "A Question Section"
      },
      {
        name: 'licenseConfirm',
        message: "A Licensing Section"
      },
      {
        name: 'statusConfirm',
        message: "A Program Status Section"
      },
      {
        name: 'futureConfirm',
        message: "A Program logo Section"
      },
    ],
    validate(answer) {
      if (answer.length < 1) {
        return 'You must atleast Generate one section in this README.md for this to be worthwhile...';
      }
  
      return true;
    },
  },
  
  
  {
    type: "input",
    name: "title",
    type: "confirm",
    name: "titleConfirm",
    message: "What is the title of this Program Application?",
  },
  {
    type: "confirm",
    name: "logo",
    name: "logoConfirm",
    message: "Does this program have a logo and/or do you want to generate a section in this readme for that Logo?",
  },
  {
    type: 'editor',
    name: 'description',
    type: "confirm",
    name: "descriptionConfirm",
    message: 'Please write a short description of this program. The length of the description must be 2 lines.',
    validate(text) {
      if (text.split('\n').length < 2) {
        return 'Must be at least 2 lines.';
      }
   } },
  {
    type: 'editor',
    name: 'install',
    type: "confirm",
    name: "installConfirm",
    message: 'Please write a short installation summary of the program in atleast 2 lines.',
    validate(text) {
      if (text.split('\n').length < 2) {
        return 'Must be at least 2 lines.';
      }
  }},
  {
    type: 'editor',
    name: 'usage',
    type: "confirm",
    name: "usageConfirm",
    message: 'Please write on how the usage is for this program in atleast 2 lines.',
    validate(text) {
      if (text.split('\n').length < 2) {
        return 'Must be at least 2 lines.';
      }
  }
},
  {
    type: "confirm",
    name: "visual",
    name: "visualConfirm",
    message: "Are you including a visual description?",
  },
  {
    type: "input",
    name: "links",
    type: "confirm",
    name: "linkConfirm",
    message: "Input your Deploy links if you have any.",
  },
  {
    type: "input",
    name: "credits",
    type: "confirm",
    name: "creditConfirm",
    message: "Input the creditors of this project.",
  },
  {
    type: "input",
    name: "username",
    type: "confirm",
    name: "usernameConfirm",
    message: "Input your github username",
  },
  {
    type: "list",
    name: "license",
    type: "confirm",
    name: "licenseConfirm",
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
  {
    type: "list",
    name: "status",
    type: "confirm",
    name: "statusConfirm",
    message: "Status of the current project? ",
    choices: [
      {
        name: "Finished and Finalized",
      },
      {
        name: "Finished for now, coming back to it",
      },
      {
        name: "Not Finished, Stil in progress",
      },
      {
        name: "Not finished, Not looking back",
      },
      {
        name: "Uncertain",
      },
    ]
  },
  {
    type: "input",
    name: "future",
    type: "confirm",
    name: "futureConfirm",
    message: "Future Plans for this project?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// function to initialize app
function init() {
  inquirer.prompt(questions).then((userAnswer) => {
    const readmeText = genTableReadme(userAnswer);
    const readmeText = genReadme(userAnswer);
    console.clear();
    console.log("Answers recorded");

    console.clear();
    console.log("Generating Markdown...");

    writeToFile("./output/README.md", readmeText);
    console.clear();
    console.log("Generation Complete");

    console.log("Search your Distribution Folder in this file system for your Generated file");
    console.log("Goodbye");
  });
}

function startReadme() {
  inquirer.prompt(askUserStart).then((userAnswer) => {
    if (userAnswer.userChoice === "Yes") {
      console.clear();
      console.log("Initilizing Program: Markdown Generator");
      init();
    } else if (userAnswer.userChoice === "No") {
      console.clear();

      console.log("User Rejected MarkDown Generation: Closing");
      return false;
    } else {
      console.log("Error");
    }
  });
}
// Function call to initialize app
startReadme();