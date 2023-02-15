// Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title} 
  ${data.getLicense}

  ## Description: 

  Contains a short description explaining the what, why, and how of the project. 
  
    ${data.description} 

  -The project motivation is: ${data.motivation}
  
  -Problems solved and future development ideas are: ${data.lessonLearned}


  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation: 
    Instructions for installation of the project are as follows. 
    
    ${data.installation}

  ## Usage: 
  Instructions and examples for use are included here. 
  
    ${data.usage} 

  ## License: 

  ${data.license} 

  ${data.licenseSelection}

  ## Contributing: 
  Specifications for contributions to the project are contained within this section.
  For additional information on contribution policy please contact me using either method in Questions section.

    ${data.contributing}

  ## Tests: 
    ${data.tests} 
  
  ## Questions: 
    ${data.questions} 
  
  If you have further questions please don't hesitate to reach out to me:
* GitHub Username: ${data.userName} 
* Link to GitHub profile: ${data.githubLink}
* Contact Email: ${data.emailTo}

`;
}

module.exports = generateMarkdown;
