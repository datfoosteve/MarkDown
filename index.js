const inquirer = require("inquirer");
const genReadme = require("./utils/generateMarkdown");
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

// an array of questions for user input
const questions = [{
    type: "checkbox",
    message: "Preprocess inquiry Question: Please Select the sections that you want to Generate in your README.md .",
    name: "qConfirm",
    choices: [{
        name: "titleConfirm",
        message: "A title Section",
      },
      {
        name: "logoConfirm",
        message: "A Program logo Section",
      },
      {
        name: "descriptionConfirm",
        message: "A Program Description Section",
      },
      {
        name: "installConfirm",
        message: "A Program install Section",
      },
      {
        name: "usageConfirm",
        message: "A Program Usage Section",
      },
      {
        name: "visualConfirm",
        message: "A Program Visual Section",
      },
      {
        name: "linksConfirm",
        message: "A Program Link Section",
      },
      {
        name: "creditsConfirm",
        message: "A Contribution/Credit Section",
      },
      {
        name: "usernameConfirm",
        message: "A Question Section",
      },
      {
        name: "licenseConfirm",
        message: "A Licensing Section",
      },
      {
        name: "statusConfirm",
        message: "A Program Status Section",
      },
      {
        name: "futureConfirm",
        message: "A Program logo Section",
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
    message: "Input your Deploy links if you have any.",
    when: (data) => (data.qConfirm.includes("linksConfirm") ? true : false),
  },
  {
    type: "input",
    name: "credits",
    message: "Input the creditors of this project.",
    when: (data) => (data.qConfirm.includes("creditsConfirm") ? true : false),
  },
  {
    type: "input",
    name: "username",
    message: "Input your github username",
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
    message: "Status of the current project? ",
    when: (data) => (data.qConfirm.includes("statusConfirm") ? true : false),
    choices: [{
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
    console.log(userAnswer);
    console.log(userAnswer.qConfirm);
    const readmeText = genReadme(userAnswer);
    // const readmetableText = generateMARKDOWNTOC(userAnswer);
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