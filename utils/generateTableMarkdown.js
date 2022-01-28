

function genValidation(data){
    let validatedData;
    if (data.descriptionConfirm === true){ 
        validatedData.push(`- [Description](#description)`)
    }
    else if (data.descriptionConfirm === true){ 
        validatedData.push(`- [Description](#description)`)
    }
    else if (data.descriptionConfirm === true){ 
        validatedData.push(`- [Description](#description)`)
    }
    else if (data.descriptionConfirm === true){ 
        validatedData.push(`- [Description](#description)`)
    }
    else if (data.descriptionConfirm === true){ 
        validatedData.push(`- [Description](#description)`)
    }
    else if (data.descriptionConfirm === true){ 
        validatedData.push(`- [Description](#description)`)
    }
    else if (data.descriptionConfirm === true){ 
        validatedData.push(`- [Description](#description)`)
    }
    else if (data.descriptionConfirm === true){ 
        validatedData.push(`- [Description](#description)`)
    }
    
}


function generateMarkdownTable(data){
     return`## Table of Contents

     ${"```md"}
        


     - [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Integration/Deploy Links](#integrationdeploy-links)
- [Credits](#credits)
- [Contact info/Questions](#contact-infoquestions)
- [License](#license)
- [Project/Assignment-Status](#projectassignment-status)
     
     ${"```"}


`}
module.exports = generateMarkdown;