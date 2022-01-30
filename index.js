const inquirer = require("inquirer");
const genReadme = require("./utils/generateMarkdown");
const fs = require("fs");

let qObject = [{
  key = "",
  value = false,
  choices = [{name = ""}]
}];

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


// an array of questions for user input
const questions = [{
    type: "checkbox",
    message: "Preprocess inquiry Question: Please Select the sections that you want to Generate in your README.md .",
    name: "qConfirm",
    choices: [
      {
        name: "titleConfirm",
      },
      {
        name: "logoConfirm"
      },
      {
        name: "descriptionConfirm"
      },
      {
        name: "installConfirm"
      },
      {
        name: "usageConfirm"
      },
      {
        name: "visualConfirm"
      },
      {
        name: "linksConfirm"
      },
      {
        name: "creditsConfirm"
      },
      {
        name: "usernameConfirm"
      },
      {
        name: "licenseConfirm"
      },
      {
        name: "statusConfirm"
      },
      {
        name: "futureConfirm"
      },
    ],
    validate(answer) {
      if (answer.length < 1) {
        return "You must atleast Generate one section in this README.md for this to be worthwhile...";
      }

      return true;
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of this Program Application?",
    when: (data) => (data.qConfirm.includes("titleConfirm") ? true : false),
  },
  {
    type: "confirm",
    name: "logo",
    message: "Do you want img src boiler plate placed into the Logo Section??",
    when: (data) => (data.qConfirm.includes("logoConfirm") ? true : false),
  },
  {
    type: "confirm",
    name: "visual",
    message: "Do you want img src boiler plate placed into the visual Section?",
    when: (data) => (data.qConfirm.includes("visualConfirm") ? true : false),
  },
  {
    type: "editor",
    name: "description",
    message: "Please write a short description of this program.The length of the description must be ateast 2 lines.",
    when: (data) =>
      data.qConfirm.includes("descriptionConfirm") ? true : false,
    validate(text) {
      if (text.split("\n").length < 2) {
        return "Must be at least 2 lines.";
      }
      return true;
    },
  },
  {
    type: "editor",
    name: "install",
    message: "Please write a short installation summary of the program in atleast 2 lines.",
    when: (data) => data.qConfirm.includes("installConfirm") ? true : false,
    validate(text) {
      if (text.split("\n").length < 2) {
        return "Must be at least 2 lines.";
      }
      return true;
    },
  },
  {
    type: "editor",
    name: "usage",
    message: "Please write on how the usage is for this program in atleast 2 lines.",
    when: (data) => (data.qConfirm.includes("usageConfirm") ? true : false),
    validate(text) {
      if (text.split("\n").length < 2) {
        return "Must be at least 2 lines.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "links",
    message: "Input your Deploy links if you have any, or links to any resources to this project and to anything else.",
    when: (data) => (data.qConfirm.includes("linksConfirm") ? true : false),
  },
  {
    type: "input",
    name: "credits",
    message: "Input the creditors/helpers/donators/contributers of this project or anyone specially named.",
    when: (data) => (data.qConfirm.includes("creditsConfirm") ? true : false),
  },
  {
    type: "input",
    name: "username",
    message: "Input your github username",
    when: (data) => (data.qConfirm.includes("usernameConfirm") ? true : false),
  },
  {
    type: "input",
    name: "email",
    message: "Input your contact email",
    when: (data) => (data.qConfirm.includes("usernameConfirm") ? true : false),
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to include for this program?",
    when: (data) => (data.qConfirm.includes("licenseConfirm") ? true : false),
    choices: [
      new inquirer.Separator(
        " =============================================== "
      ),
      {
        name: "MIT License",
      },
      new inquirer.Separator(
        " =============================================== "
      ),
      {
        name: "GNU Lesser General Public License v3.0",
      },
      new inquirer.Separator(
        " =============================================== "
      ),
      {
        name: "Mozilla Public License 2.0",
      },
      new inquirer.Separator(
        " =============================================== "
      ),
      {
        name: "GNU Affero General Public License v3.0",
      },
      new inquirer.Separator(
        " =============================================== "
      ),
      {
        name: "The Unlicense",
      },
      new inquirer.Separator(
        " =============================================== "
      ),
      {
        name: "Apache License 2.0",
      },
      new inquirer.Separator(
        " =============================================== "
      ),
      {
        name: "GNU General Public License v3.0",
      },
      new inquirer.Separator(
        " =============================================== "
      ),
      {
        name: "WTFPL",
      },
      new inquirer.Separator(
        " =============================================== "
      ),
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
    message: "Status of the current project? ",
    when: (data) => (data.qConfirm.includes("statusConfirm") ? true : false),
    choices: [{
        name: "Finished and Finalized",
      },
      {
        name: "Finished for now, coming back to it",
      },
      {
        name: "Not Finished, Still in progress",
      },
      {
        name: "Not finished, Not looking back",
      },
      {
        name: "Uncertain on standing",
      },
    ],
  },
  {
    type: "input",
    name: "future",
    message: "Future Plans for this project?",
    when: (data) => (data.qConfirm.includes("futureConfirm") ? true : false),
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// function to initialize app
function init() {
  inquirer.prompt(questions).then((userAnswer) => {

    console.log("===============================[init() function: before inquirer answer passthrough]=================================");
    console.log(userAnswer);
    console.log(userAnswer.qConfirm);
    console.log("===============================[init() function: after inquirer answer passthrough]=================================");
    const readmeText = genReadme(userAnswer,userAnswer.qConfirm);
    generateMARKDOWNTOC(questionsqConfirm);
    console.clear();
    console.log("Answers recorded");

    console.clear();
    console.log("Generating Markdown...");

    writeToFile("./output/README.md", readmeText);
    console.clear();
    console.log("Generation Complete");

    console.log(
      "Search your Distribution Folder in this file system for your Generated file"
    );
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