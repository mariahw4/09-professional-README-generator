// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # Project Title: ${data.title} 
  ${data.getLicense}

  ## Description: 

  ${data.description} 

  ## Table of Contents
  * [Installation](##-Installation)
  * [Usage](##-Usage)
  * [License](##-License)
  * [Contributing](##-Contributing)
  * [Tests](##-Tests)
  * [Questions](##-Questions)

  ## Installation: 

  ${data.installation}

  ## Usage: 

  ${data.usage} 

  ## License: 

  ${data.license} 
  ${data.licenseSelection}

  ## Contributing: 

  ${data.contributing}

  ## Tests: 

  ${data.tests} 
  
  ## Questions: 

  ${data.questions} 
  
  If you have further questions please don't hesitate to reach out at either:
* GitHub Username: ${data.userName}
* Contact Email: ${data.userEmail}

`;
}

module.exports = generateMarkdown;
