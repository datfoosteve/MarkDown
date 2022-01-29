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

    return `## License
    ${renderLicenseBadge(license)}

    ${renderLicenseLink(license)}
    
    [![wakatime](https://wakatime.com/badge/user/e28968b8-239d-45f9-bc7a-037d6eef5382.svg)](https://wakatime.com/@e28968b8-239d-45f9-bc7a-037d6eef5382)
    `
  } else { //
    return ``;
  }
}

// rendering badge for the top of the page
function renderLicenseTop(license) {
  if (license != 'None') {
    return `<br>${renderLicenseBadge(license)}`;
  } else { //
    return ``;
  }
}

// this code block just creates space for you to put gifs and such, it doesnt do anything
// further then that, but i gotta use it for my next assignments, thats why its here
function renderVisualDescription(data) {

  if (data.visual === true) {
    return `
    
    ![someImageGIF](/repository/assets/employee.png?raw=true "Employee Data title")

    `
  } else { //
    return ``;
  }

}
// THis one is for logos, no explanation, just creates an open space
function renderLogo(data) {

  if (data.logo === true) {
    return `
    <p align="center">
    ##Visual Representation

    ![Somelogo](/repository/assets/employee.png?raw=true "Employee Data title")

    </p>`;
  } else {
    return ``;
  }
}


//a function to generate markdown for README
function generateMarkdown(data) {

  
const {
  logo,
  title,
  visual,
  description,
  install,
  usage,
  links,
  license,
  contributing,
  credits,
  username,
  status,
  future,
  qConfirm
} = data;

  return `
#${title}


  
${renderLicenseTop(license)}

${renderLogo(logo)}

## Description



$


${generateMarkdownTable(qConfirm)}

${renderVisualDescription(data)}

## Installation


${install}


## Usage


${usage}



## Integration/Deploy Links

${links}

## Credits



${credits}



## Contact info/Questions
[This is my Email](stephenandarlie@gmail.com)
[GithubLink](https://github.com/${username})

Feel Free To Contact me with any of your questions!

${renderLicenseSection(data.license)}

[![wakatime](https://wakatime.com/badge/user/e28968b8-239d-45f9-bc7a-037d6eef5382.svg)](https://wakatime.com/@e28968b8-239d-45f9-bc7a-037d6eef5382)

## Project/Assignment-Status


${future}

`;
};


  module.exports = generateMarkdown;


  // listOfLicenses = [{
  //     "key": "mit",
  //     "name": "MIT License",
  //     "spdx_id": "MIT",
  //     "url": "https://api.github.com/licenses/mit",
  //     "node_id": "MDc6TGljZW5zZW1pdA==",
  //     "badge": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  //   },
  //   {
  //     "key": "lgpl-3.0",
  //     "name": "GNU Lesser General Public License v3.0",
  //     "spdx_id": "LGPL-3.0",
  //     "url": "https://api.github.com/licenses/lgpl-3.0",
  //     "node_id": "MDc6TGljZW5zZW1pdA==",
  //     "badge": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  //   },
  //   {
  //     "key": "mpl-2.0",
  //     "name": "Mozilla Public License 2.0",
  //     "spdx_id": "MPL-2.0",
  //     "url": "https://api.github.com/licenses/mpl-2.0",
  //     "node_id": "MDc6TGljZW5zZW1pdA==",
  //     "badge": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  //   },
  //   {
  //     "key": "agpl-3.0",
  //     "name": "GNU Affero General Public License v3.0",
  //     "spdx_id": "AGPL-3.0",
  //     "url": "https://api.github.com/licenses/agpl-3.0",
  //     "node_id": "MDc6TGljZW5zZW1pdA==",
  //     "badge": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  //   },
  //   {
  //     "key": "unlicense",
  //     "name": "The Unlicense",
  //     "spdx_id": "Unlicense",
  //     "url": "https://api.github.com/licenses/unlicense",
  //     "node_id": "MDc6TGljZW5zZW1pdA==",
  //     "badge": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  //   },
  //   {
  //     "key": "apache-2.0",
  //     "name": "Apache License 2.0",
  //     "spdx_id": "Apache-2.0",
  //     "url": "https://api.github.com/licenses/apache-2.0",
  //     "node_id": "MDc6TGljZW5zZW1pdA==",
  //     "badge": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  //   },
  //   {
  //     "key": "gpl-3.0",
  //     "name": "GNU General Public License v3.0",
  //     "spdx_id": "GPL-3.0",
  //     "url": "https://api.github.com/licenses/gpl-3.0",
  //     "node_id": "MDc6TGljZW5zZW1pdA==",
  //     "badge": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  //   },
  //   {
  //     "key": "WTFPL",
  //     "name": "The Do What the Fuck You Want to Public License",
  //     "spdx_id": "WTFPL",
  //     "url": "http://www.wtfpl.net/about/",
  //     "node_id": "not known",
  //     "badge": "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
  //   }

  // ]