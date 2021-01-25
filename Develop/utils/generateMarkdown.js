
function generateMarkdown(data) {
    console.log(data);
    return `
  # ${data.Project}
         ${data.Email}
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Description
       ${data.Description}
  ## Table of Contents
  * GitHub Username
  * Project URL
  * Installation
  * Usage
  * Contribution
  * Tests
  * License
  ## GitHub Username
      #${data.Name}
  ## Project URl
       ${data.url}
  ## Installation 
       ${data.Installation}
  ## License 
  This project is licensed under the ${data.License}
  ## Contributing
       ${data.Contribution}
  ## Test
       To run test, run the following command:
       ${data.Tests}
  `;
  }
  
  module.exports = generateMarkdown;