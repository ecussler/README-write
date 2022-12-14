/**
 * Function renders the license image at the top of the page
 * @param {*} license pulls license input from user, if there is a license
 * @returns string that will render the image
 */
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[![License](https://img.shields.io/badge/License-${license}-yellow.svg)]`
  } else {
    return ''; 
  }
}

/**
 * Function renders the License link in the Table of Contents
 * @param {*} license pulls license input from user, if there is a license
 * @returns string that will render the link
 */
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)`
  } else {
    return ''; 
  }
}

/**
 * Function renders the entire License section fo the README.md
 * @param {*} license pulls license input from user, if there is a license
 * @returns string that will render the section
 */
function renderLicenseSection(license) {
 if (license !== 'None') {
  return `## License
  
  This project uses the ${license} license.`; 
 } else {
  return ''; 
 };
}

/**
 * Function renders the entire markdown section
 * @param {*} data pulls input from inquirer
 * @returns REAME.md file
 */
function generateMarkdown(data) {
  return `# ${data.project} ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contribution](#contribution)
   - [Testing](#testing)
   ${renderLicenseLink(data.license)}
   - [Questions](#questions)

  ## Installation
  To install dependencies and run this application, please pass the following code in the command line of the application:

  ~~~
  ${data.installation}
  ~~~

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Testing
  To test, please pass the following code in the command line of the application:

  ~~~
  ${data.test}
  ~~~

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions, please visit my GitHub or email me:
  - GitHub profile: https://github.com/${data.github}
  - Email: ${data.email}
  `
}

module.exports = generateMarkdown;
