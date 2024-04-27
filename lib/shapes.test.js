const { Triangle, Circle, Square } = require('./shapes')

describe('Triangle', ()=>{
   it('returns the right svg with corect color', () =>{
   const triangle = new Triangle();
   triangle.setColor('blue');
   expect(triangle.render()).toEqual(`<polygon points="100,10 150,190 50,190" fill="blue" />`);
});
});

describe('Circle', ()=>{
    it('returns the right svg with corect color', () =>{
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.render()).toEqual(`<circle cx="100" cy="100" r="80" fill="green" />`)
});
});

 describe('Square', ()=>{
    it('returns the right svg with corect color', () =>{
    const square = new Square();
    square.setColor('yellow');
    expect(square.render()).toEqual(`<rect width="120" height="120" x="40" y="40"  fill="yellow" />`)
});
});