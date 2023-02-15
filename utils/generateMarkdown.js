// Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # Project Title: ${data.title} 
  ${data.getLicense}

  ## Description: 

  ${data.description} 

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

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
* GitHub Link: ${data.githubLink}
* Contact Email: ${data.userEmail}

`;
}

module.exports = generateMarkdown;
