const inquirer =require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square} = require('./lib/shapes');

//User input prompt
inquirer
    .createPromptModule([
        {
            type: 'input',
            message: 'Enter up to three characters',
            name: 'text'
        },
        {
            type: 'input',
            message: 'Enter color or hexadecimal number for text color',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'Choose a shape.',
            choices: ['Circle', 'Triangle', 'Square'],
            name: 'shape'
        },
        {
            type: 'input',
            message: 'Enter a color or hexadecimal number for the shape',
            name: 'shapeColor'
        },
    ])