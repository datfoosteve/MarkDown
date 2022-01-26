


//make sure to deconstruct the object so you can use em

// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
    if (license === "MIT License"){
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if(license === "GNU Lesser General Public License v3.0"){
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
    }
    else if(license === "Mozilla Public License 2.0"){
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    else if(license === "GNU Affero General Public License v3.0"){
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    }
    else if(license === "The Unlicense"){
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
    else if(license === "Apache License 2.0"){
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if(license === "GNU General Public License v3.0"){
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
    else if(license === "WTFPL"){
      return `[![License: WTFPL](https://img.shields.i
        o/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
    }
    else{ //
    return ``
  }
  }
  


//  Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License"){
    
  }
  else if(license === "GNU Lesser General Public License v3.0"){

  }
  else if(license === "Mozilla Public License 2.0"){

  }
  else if(license === "GNU Affero General Public License v3.0"){

  }
  else if(license === "The Unlicense"){

  }
  else if(license === "Apache License 2.0"){

  }
  else if(license === "GNU General Public License v3.0"){

  }
  else if(license === "WTFPL"){

  }
  else{ //
  license = ``;
}

}

  
// Create a function that returns the license section of README
// If there is no license, return an empty string
//  //${renderLicenseLink(license)}
function renderLicenseSection(license) {
let renderString = renderLicenseBadge(license);
  
  if (license != 'None'){
    return `## License

    ${renderString}

    `
  }
  else{ //
  return ``;
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.install}

## Usage

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}


`;
}





listOfLicenses = [
  {
     "key": "mit",
     "name": "MIT License",
     "spdx_id": "MIT",
     "url": "https://api.github.com/licenses/mit",
     "node_id": "MDc6TGljZW5zZW1pdA==",
     "badge": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
   },
   {
     "key": "lgpl-3.0",
     "name": "GNU Lesser General Public License v3.0",
     "spdx_id": "LGPL-3.0",
     "url": "https://api.github.com/licenses/lgpl-3.0",
     "node_id": "MDc6TGljZW5zZW1pdA==",
     "badge": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
   },
   {
     "key": "mpl-2.0",
     "name": "Mozilla Public License 2.0",
     "spdx_id": "MPL-2.0",
     "url": "https://api.github.com/licenses/mpl-2.0",
     "node_id": "MDc6TGljZW5zZW1pdA==",
     "badge": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
   },
   {
     "key": "agpl-3.0",
     "name": "GNU Affero General Public License v3.0",
     "spdx_id": "AGPL-3.0",
     "url": "https://api.github.com/licenses/agpl-3.0",
     "node_id": "MDc6TGljZW5zZW1pdA==",
     "badge": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
   },
   {
     "key": "unlicense",
     "name": "The Unlicense",
     "spdx_id": "Unlicense",
     "url": "https://api.github.com/licenses/unlicense",
     "node_id": "MDc6TGljZW5zZW1pdA==",
     "badge": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
   },
   {
     "key": "apache-2.0",
     "name": "Apache License 2.0",
     "spdx_id": "Apache-2.0",
     "url": "https://api.github.com/licenses/apache-2.0",
     "node_id": "MDc6TGljZW5zZW1pdA==",
     "badge": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
   },
   {
     "key": "gpl-3.0",
     "name": "GNU General Public License v3.0",
     "spdx_id": "GPL-3.0",
     "url": "https://api.github.com/licenses/gpl-3.0",
     "node_id": "MDc6TGljZW5zZW1pdA==",
     "badge": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
   },
   {"key": "WTFPL",
     "name": "The Do What the Fuck You Want to Public License",
     "spdx_id": "WTFPL",
     "url": "http://www.wtfpl.net/about/",
     "node_id": "not known",
     "badge": "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
   }
     
 ]

 module.exports = generateMarkdown;