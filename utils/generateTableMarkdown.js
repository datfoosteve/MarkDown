
function generateMarkdownTable(data){


    const {
        titleConfirm,
        visualConfirm,
        creditsConfirm,
        descriptionConfirm,
        installConfirm,
        licenseConfirm,
        linksConfirm,
        logoConfirm,
        futureConfirm,
        usernameConfirm,
        statusConfirm,
      } = qconfirm;


    let validatedData;
    validatedData += "## Table of Contents<br>";
    if (titleConfirm === true){ 
        validatedData += "- [Title(#title)<br>";
    }
    else if (logoConfirm === true){ 
        validatedData += "- [logo](#logo)<br>";
    }
    else if (installConfirm === true){ 
        validatedData += "- [Installation](#installation)<br>";
    }
    else if (descriptionConfirm === true){ 
        validatedData += "- [Description](#description)<br>";
    }
    else if (usageConfirm === true){ 
        validatedData += "- [Usage](#usage)<br>";
    }
    else if (linksConfirm === true){ 
        validatedData += "- [Integration/Deploy Links](#integrationdeploy-links)<br>";
    }
    else if (creditsConfirm === true){ 
        validatedData += "- [Credits](#credits)<br>";
    }
    else if (usernameConfirm === true){ 
        validatedData += "- [Contact info/Questions](#contact-infoquestions)<br>";
    }
    else if (licenseConfirm === true){ 
        validatedData += "- [License](#license)<br>";
    }else if (statusConfirm === true){ 
        validatedData += "- [Project/Assignment-Status](#projectassignment-status)<br>";
    }
    validatedData += "<br>";

    return validatedData;
}

module.exports = generateMarkdownTable;