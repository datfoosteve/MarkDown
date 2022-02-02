
// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`;
  } else if (license === "GNU Lesser General Public License v3.0") {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)\n`;
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n`;
  } else if (license === "GNU Affero General Public License v3.0") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)\n`;
  } else if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n`;
  } else if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`;
  } else if (license === "GNU General Public License v3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`;
  } else if (license === "WTFPL") {
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)\n`;
    //
    return``;
  }
}

/**
 * This function generates the table of contents for the markdown file.
 * @param data - The data object that contains the data that will be used to generate the markdown.
 * @returns a string containing the info\
 */
function generateMARKDOWNTOC({ qConfirm }) {

  let validatedData = "## Table of Contents\n";
  if (qConfirm.indexOf("titleConfirm")) {
    validatedData = validatedData + "- [Title](#title)\n";
  }
  if (qConfirm.indexOf("logoConfirm")) {
    validatedData = validatedData + "- [logo](#logo)\n";
  }
  if (qConfirm.indexOf("installConfirm")){
    validatedData = validatedData + "- [Installation](#installation)\n";
  }
  if (qConfirm.indexOf("descriptionConfirm")) {
    validatedData = validatedData + "- [Description](#description)\n";
  }
  if (qConfirm.indexOf("usageConfirm")) {
    validatedData = validatedData + "- [Usage](#usage)\n";
  }
  if (qConfirm.indexOf("linksConfirm")) {
    validatedData = validatedData + "- [Integration/Deploy Links](#integrationdeploy-links)\n";
  }
  if (qConfirm.indexOf("creditsConfirm")) {
    validatedData = validatedData + "- [Credits](#credits)\n";
  }
  if (qConfirm.indexOf("usernameConfirm")) {
    validatedData = validatedData + "- [Contact info/Questions](#contact-infoquestions)\n";
  }
  if (qConfirm.indexOf("licenseConfirm")) {
    validatedData = validatedData + "- [License](#license)\n";
  }
  if (qConfirm.indexOf("statusConfirm")) {
    validatedData = validatedData + "- [Project/Assignment-Status](#projectassignment-status)\n";
  }
  validatedData = validatedData + "";

  console.log(validatedData);
  return validatedData;
}

//  Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return `[![MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === "GNU Lesser General Public License v3.0") {
    return `[![GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `[![Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "GNU Affero General Public License v3.0") {
    return `[![GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license === "The Unlicense") {
    return `[![The Unlicense](http://unlicense.org/)`;
  } else if (license === "Apache License 2.0") {
    return `[![Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GNU General Public License v3.0") {
    return `[![GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)]`;
  } else if (license === "WTFPL") {
    return `[![Do What The 😘 You Want Public License](http://www.wtfpl.net/about/)`;
  } else {
    //
    license = ``;
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
//  //${renderLicenseLink(license)}
function renderLicenseSection(license) {
  if (license != "None") {
    return `## License

${renderLicenseBadge(license)}

${renderLicenseLink(license)}`;
  } else {
    //
    return ``;
  }
}

// rendering badge for the top of the page
function renderLicenseTop(license) {
  if (license != "None") {
    return `<p align="center">${renderLicenseBadge(license)}`;
  } else {
    //
    return ``;
  }
}

// this code block just creates space for you to put gifs and such, it doesnt do anything
// further then that, but i gotta use it for my next assignments, thats why its here
function renderVisualDescription(data) {
  if (data.visual) {
    return `[![someImageGIF](src="./assets/engineer.png?raw=true" "Employee Data title")

  `;
  } else {
    //
    return ``;
  }
}
// THis one is for logos, no explanation, just creates an open space
function renderLogo(data) {
  if (data.logoConfirm) {
    return `## Visual Representation  
<p align="center">  
<img width="300" height="300" src="/assets/engineer.png">  
</p>`;
  } else {
    return ``;
  }
}

function generateTitle(data) {
  if (data.qConfirm.indexOf("titleConfirm")) {
    return `<p align="center"> ${data.title}
#### <p align="center"> 09 Node.js Homework: </p>`;
  } else {
return ``;
  }
}

//data.descriptionConfirm
function generateDescription(data) {
  if ((data) => (data.qConfirm.includes("descriptionConfirm") ? true : false)) {
    return `## Description
<p align="center">${data.description}
#### <p align="center"> 09 Node.js Homework: </p>`;
  } else {
    return ``;
  }
}
//data.installConfirm
function generateInstallation(data) {
  if ((data) => (data.qConfirm.includes("installConfirm") ? true : false)) {
return `## Installation

${data.install}
  
`;
  } else {
    return ``;
  }
}
//(data.usageConfirm)
function generateUsage(data) {
  if ((data) => (data.qConfirm.includes("titleConfirm") ? true : false)) {
    return `## Usage 
<p align="center">${data.usage}
</p>`;
  } else {
    return ``;
  }
}

function generateUsage(data) {
  if (data.usageConfirm) {
    return `## Installation
  
<p align="center">${data.usage}
  
</p>`;
  } else {
    return ``;
  }
}

function generateContact({ email, username, usernameConfirm }) {
  if (usernameConfirm) {
    return `## Contact info/Questions\n
<div align=center>\n
[Email](${email})\n
[GithubLink](https://github.com/${username})\n
</div>
  
Feel Free To Contact me with any of your questions!`;
  } else {
    return ``;
  }
}

//a function to generate markdown for README
function generateMarkdown(data) {

  return `${generateTitle(data)}

${renderLicenseTop(data.license)}

${renderLogo(data)}

${generateDescription(data)}

${generateMARKDOWNTOC(data)} 

${renderVisualDescription(data)} 

${generateInstallation(data)}

${generateContact(data)}

${generateUsage(data)}

## Integration/Deploy Links

${data.links}

## Credits

${data.credits}

${renderLicenseSection(data.license)}

[![wakatime](https://wakatime.com/badge/user/e28968b8-239d-45f9-bc7a-037d6eef5382.svg)](https://wakatime.com/@e28968b8-239d-45f9-bc7a-037d6eef5382)

## Project/Assignment-Status

${data.future}
`;
}

module.exports = generateMarkdown;
