let dataobject = {
  questArrayObject = [{data: data}],
  questionValidObject = [{}]
};

// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "GNU Lesser General Public License v3.0") {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === "GNU Affero General Public License v3.0") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  } else if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GNU General Public License v3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "WTFPL") {
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
  } else { //
    return ``;
  }
}

/**
 * This function generates the table of contents for the markdown file.
 * @param data - The data object that contains the data that will be used to generate the markdown.
 * @returns a string containing the info\
 */
function generateMARKDOWNTOC(data){
  const {titleConfirm,visualConfirm,creditsConfirm,descriptionConfirm,
  installConfirm,licenseConfirm,linksConfirm,
  logoConfirm,futureConfirm,usernameConfirm,statusConfirm,
}= data.qConfirm;

    
  validatedData = "## Table of Contents"; 
  if (data.titleConfirm){ 
      validatedData +="- [Title(#title)";
  }
  if (data.logoConfirm){ 
      validatedData += "- [logo](#logo)";
  }
  if (data.installConfirm ){ 
      validatedData += "- [Installation](#installation)";
  }
  if (data.descriptionConfirm ){ 
      validatedData += "- [Description](#description)";
  }
  if (data.usageConfirm ){ 
      validatedData += "- [Usage](#usage)";
  }
  if (data.linksConfirm ){ 
      validatedData += "- [Integration/Deploy Links](#integrationdeploy-links)";
  }
  if (data.creditsConfirm ){ 
      validatedData += "- [Credits](#credits)";
  }
  if (data.usernameConfirm ){ 
      validatedData += "- [Contact info/Questions](#contact-infoquestions)";
  }
  if (data.licenseConfirm ){ 
      validatedData += "- [License](#license)";
  }if (data.statusConfirm ){ 
      validatedData += "- [Project/Assignment-Status](#projectassignment-status)";
  }
  validatedData += "";

  console.log(validatedData);
return(validatedData);
}

//  Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


  if (license === "MIT License") {
    return `[![MIT License](https://opensource.org/licenses/MIT)`
  } else if (license === "GNU Lesser General Public License v3.0") {
    return `[![GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0)`
  } else if (license === "Mozilla Public License 2.0") {
    return `[![Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === "GNU Affero General Public License v3.0") {
    return `[![GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license === "The Unlicense") {
    return `[![The Unlicense](http://unlicense.org/)`
  } else if (license === "Apache License 2.0") {
    return `[![Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GNU General Public License v3.0") {
    return `[![GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)]`
  } else if (license === "WTFPL") {
    return `[![Do What The 😘 You Want Public License](http://www.wtfpl.net/about/)`
  } else { //
    license = ``;
  }

}


// Create a function that returns the license section of README
// If there is no license, return an empty string
//  //${renderLicenseLink(license)}
function renderLicenseSection(license) {

if (license != 'None') {

return `## License 

${renderLicenseBadge(license)}

${renderLicenseLink(license)}`
}else { //
    return ``;
  }
}

// rendering badge for the top of the page
function renderLicenseTop(license) {
  if (license != 'None') {
    return `<p align="center">${renderLicenseBadge(license)}  }`;
  } else { //
    return ``;
  }
}

// this code block just creates space for you to put gifs and such, it doesnt do anything
// further then that, but i gotta use it for my next assignments, thats why its here
function renderVisualDescription(data) {

  if (data.visual) {
    return `![someImageGIF](src="./assets/engineer.png?raw=true" "Employee Data title")

  `
  } else { //
    return ``;
  }

}
// THis one is for logos, no explanation, just creates an open space
function renderLogo(data) {

  if (data.logoConfirm) {
    return `## Visual Representation

<p align="center">
<img width="300" height="300" src="/assets/engineer.png">
</p>

</p>`;
  } else {
    return ``;
  }
}

function generateTitle(data){ 
  if (data.titleConfirm) {
return`<p align="center"> ${title}

#### <p align="center"> 09 Node.js Homework:`}
  else {return``;}
}


//data.descriptionConfirm
function generateDescription (data){ 
  if ((data) => (data.qConfirm.includes("descriptionConfirm") ? true : false)) {
  return`## Description

<p align="center">${data.description}
#### <p align="center"> 09 Node.js Homework:`}
  else {return``;}

}
//data.installConfirm
function generateInstallation(data){ 
  if ((data) => (data.qConfirm.includes("installConfirm") ? true : false)) {
return `## Installation 

${install}
  
`}
  else {return``;}

}
//(data.usageConfirm)
function generateUsage (data){ 
  if ((data) => (data.qConfirm.includes("titleConfirm") ? true : false)) {
  return`## Usage 
<p align="center">${usage}
`}
  else {return``;}
}

function generateUsage (data){ 
  if (data.usageConfirm) {
  return`## Installation

<p align="center">${usage}
`}
  else {return``;}
}

function generateContact (data){
 if(data.usernameConfirm){ return`## Contact info/Questions

<div align=center>
  
[Email](${email})
  
[GithubLink](https://github.com/${username}) 
  
</div>
  
Feel Free To Contact me with any of your questions!`
 } else{
   return ``;
 }
  
}

//a function to generate markdown for README
function generateMarkdown(data){
  
  const {
    logo,title,visual,description,install,usage,
    links,license,credits,username,
    status,future} = data;
  
  // const {
  //   titleConfirm,visualConfirm,creditsConfirm,descriptionConfirm,
  //   installConfirm,licenseConfirm,linksConfirm,
  //   logoConfirm,futureConfirm,usernameConfirm,statusConfirm,
  // } = data.qConfirm;


return`${generateTitle(data)}

${renderLicenseTop(license)}

${renderLogo(data)}

${generateDescription(data)}

${generateMARKDOWNTOC(data.qConfirm)} 

${renderVisualDescription(data)} 

${generateInstallation(data)}

${generateContact(data)}

${generateUsage(data)}

## Integration/Deploy Links

${links}

## Credits

${credits}

${renderLicenseSection(data.license)}

[![wakatime](https://wakatime.com/badge/user/e28968b8-239d-45f9-bc7a-037d6eef5382.svg)](https://wakatime.com/@e28968b8-239d-45f9-bc7a-037d6eef5382)

## Project/Assignment-Status

${future}

`}

module.exports = generateMarkdown;