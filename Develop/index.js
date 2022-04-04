// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    console.log(`
    ====================================================
    Answer the following questions to generate a readme!
    ====================================================
    `);
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your github username?',
        validate: nameInput =>{
            if (nameInput){
                return true;
            } else {
               console.log('Please enter github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput =>{
            if (nameInput){
                return true;
            } else {
               console.log('Please enter email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: nameInput =>{
            if (nameInput){
                return true;
            } else {
                console.log('Please enter project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        vadlidate: nameInput =>{
            if(nameInput){
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what is the intended usage?',
        vadlidate: nameInput =>{
            if(nameInput){
                return true;
            } else {
                console.log('Please enter what the ussage is!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'what are the contribution guidelines?',
        vadlidate: nameInput =>{
            if(nameInput){
                return true;
            } else {
                console.log('Please enter contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'what are the test instructions?',
        vadlidate: nameInput =>{
            if(nameInput){
                return true;
            } else {
                console.log('Please enter test instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are the installation instructions?',
        vadlidate: nameInput =>{
            if(nameInput){
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },
])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject)=>{
        fs.writeFile('./utils/README.md', fileName, data, err =>{
            // if error, reject promise
            if (err){
                reject(err);
                console.log(err);
                return;
            }
            //if successful resolve and sent promise
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    //runs questions function 
    questions()
    //passes data from query into generateReadMe function
    .then(data => {
        return generateReadMe(data);
    })
    //takes information from generateReadMe and passes it through writefile which appends the new readme.md
    .then (data =>{
        //logs data to ensure it works correctly
        console.log(data);
        return writeToFile(data);
    })
};

// Function call to initialize app
init();
