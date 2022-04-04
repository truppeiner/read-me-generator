// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents

  ## Usage Guidelines
  ${data.usage}

  ## Contribution guidelines
  ${data.contribution}

  ## Installation Instructions 
  ${data.installation}

  ## Test Instructions
  ${data.test}

  ## Contributors
  Find me on GitHub: https://github.com/${data.name}
  Email me at: ${email}
`;
}

module.exports = generateMarkdown;
