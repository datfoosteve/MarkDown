

// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "MIT License") {
    return `<br>[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "GNU Lesser General Public License v3.0") {
    return `<br>[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
  } else if (license === "Mozilla Public License 2.0") {
    return `<br>[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === "GNU Affero General Public License v3.0") {
    return `<br>[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license === "The Unlicense") {
    return `<br>[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  } else if (license === "Apache License 2.0") {
    return `<br>[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GNU General Public License v3.0") {
    return `<br>[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "WTFPL") {
    return `<br>[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
  } else { //
    return ``
  }
}

function generateMARKDOWNTOC(data){
  const {titleConfirm,visualConfirm,creditsConfirm,descriptionConfirm,
  installConfirm,licenseConfirm,linksConfirm,
  logoConfirm,futureConfirm,usernameConfirm,statusConfirm,
} = data.qConfirm;

  return() => {
  validatedData = "## Table of Contents<br>"; 
  if (data.titleConfirm){ 
      validatedData +"- [Title(#title)<br>";
  }
  else if (data.logoConfirm){ 
      validatedData += "- [logo](#logo)<br>";
  }
  else if (data.installConfirm ){ 
      validatedData += "- [Installation](#installation)<br>";
  }
  else if (data.descriptionConfirm ){ 
      validatedData += "- [Description](#description)<br>";
  }
  else if (data.usageConfirm ){ 
      validatedData += "- [Usage](#usage)<br>";
  }
  else if (data.linksConfirm ){ 
      validatedData += "- [Integration/Deploy Links](#integrationdeploy-links)<br>";
  }
  else if (data.creditsConfirm ){ 
      validatedData += "- [Credits](#credits)<br>";
  }
  else if (data.usernameConfirm ){ 
      validatedData += "- [Contact info/Questions](#contact-infoquestions)<br>";
  }
  else if (data.licenseConfirm ){ 
      validatedData += "- [License](#license)<br>";
  }else if (data.statusConfirm ){ 
      validatedData += "- [Project/Assignment-Status](#projectassignment-status)<br>";
  }
  validatedData += "<br>";

  console.log(validatedData);

}

}

//  Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


  if (license === "MIT License") {
    return `<br>[![MIT License](https://opensource.org/licenses/MIT)`
  } else if (license === "GNU Lesser General Public License v3.0") {
    return `<br>[![GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0)`
  } else if (license === "Mozilla Public License 2.0") {
    return `<br>[![Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === "GNU Affero General Public License v3.0") {
    return `<br>[![GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license === "The Unlicense") {
    return `<br>[![The Unlicense](http://unlicense.org/)`
  } else if (license === "Apache License 2.0") {
    return `<br>[![Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GNU General Public License v3.0") {
    return `<br>[![GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)]`
  } else if (license === "WTFPL") {
    return `<br>[![Do What The 😘 You Want Public License](http://www.wtfpl.net/about/)`
  } else { //
    license = ``;
  }

}


// Create a function that returns the license section of README
// If there is no license, return an empty string
//  //${renderLicenseLink(license)}
function renderLicenseSection(license) {

  if (license != 'None') {

    return `
    ## License <br><br>
    ${renderLicenseBadge(license)}<br>

    ${renderLicenseLink(license)}<br>
    
    `
  } else { //
    return ``;
  }
}

// rendering badge for the top of the page
function renderLicenseTop(license) {
  if (license != 'None') {
    return `<br><p align="center"><br>${renderLicenseBadge(license)} <br> }`;
  } else { //
    return ``;
  }
}

// this code block just creates space for you to put gifs and such, it doesnt do anything
// further then that, but i gotta use it for my next assignments, thats why its here
function renderVisualDescription(data) {

  if (data.visual) {
    return `
    
    ![someImageGIF](src="./assets/engineer.png?raw=true" "Employee Data title")

    `
  } else { //
    return ``;
  }

}
// THis one is for logos, no explanation, just creates an open space
function renderLogo(data) {

  if (data.qConfirm.logoConfirm) {
    return `<br>
    ## Visual Representation
    <p align="center">
    <img width="300" height="300" src="/assets/engineer.png">
</p>

    </p>`;
  } else {
    return ``;
  }
}

function generateTitle (data){ 
  return`<br>
  <p align="center"> ${title}
  #### <p align="center"> 09 Node.js Homework:
  `
}



function generateDescription (data){ 
  if (data.qConfirm.logoConfirm) {
  return`## Description <br>
  <p align="center">${description}
  #### <p align="center"> 09 Node.js Homework:
  `}
  else {return``;}

}

function generateInstallation (data){ 
  if (data.qConfirm.install) {
  return`## Installation <br>
  <p align="center">${install}
  `}
  else {return``;}

}

//a function to generate markdown for README
function generateMarkdown(data){
  
const {
  logo,title,visual,description,install,usage,
  links,license,contributing,credits,username,
  status,future,} = data;

const {
  titleConfirm,visualConfirm,creditsConfirm,descriptionConfirm,
  installConfirm,licenseConfirm,linksConfirm,
  logoConfirm,futureConfirm,usernameConfirm,statusConfirm,
} = data.qConfirm;

return`<br><br>${generateTitle}


${renderLicenseTop(license)}

${renderLogo(data)}


${generateDescription}

${generateMARKDOWNTOC(data)} <br>

${renderVisualDescription(data)} <br>


## Installation 
<br>

${install}

<br>


### Usage

<br><br>


 <br>
${usage} <br>
 



## Integration/Deploy Links <br>

${links}

## Credits <br>



${credits}



## Contact info/Questions 
<div align=center>

[This is my Email](stephenandarlie@gmail.com)


[GithubLink](https://github.com/datfoosteve) 
<br>
</div>

Feel Free To Contact me with any of your questions!<br>

${renderLicenseSection(data.license)} <br>

[![wakatime](https://wakatime.com/badge/user/e28968b8-239d-45f9-bc7a-037d6eef5382.svg)](https://wakatime.com/@e28968b8-239d-45f9-bc7a-037d6eef5382)

## Project/Assignment-Status <br>


${future} <br>

` }

module.exports = generateMarkdown;