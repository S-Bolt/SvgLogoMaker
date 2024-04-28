const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square} = require('./lib/shapes');

//User input prompt
inquirer
    .prompt([
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
    //process inquirer input
    .then((data) => {
        console.log(data)
   //Create SVG 
   let svg = '';
   switch (data.shape) {
    case 'Triangle':
        const triangle = new Triangle(data.shapeColor);
        svg = triangle.render();
        break;

    case 'Circle':
        const circle = new Circle(data.shapeColor);
        svg = circle.render();
        break;

    case 'Square':
        const square = new Square(data.shapeColor);
        svg = square.render();
        break;    
    
    default:
        console.log('err')
     };


        console.log('SVG', svg);

        //writing svg file
        fs.writeFileSync('logo.svg', svg);
        console.log('Generate Logo');

        const htmlContent = createHTMLwithSVG(svg);

        //write html content back to file
        fs.writeFileSync('index.html', htmlContent);
        console.log('Updated HTML file');
    })
     
    .catch((error) =>{
        console.error('Error occurred', error);
    });
    
    //funtion to creat HTML content with svg
    function createHTMLwithSVG(svgContent) {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>SVG Logo</title>
        </head>
        <body>
            <svg id="svg-container">
                ${svgContent}
            </svg>
        </body>
        </html>`;

    };
