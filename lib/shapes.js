class Shape {
    constructor(color) {
        this.color = color || "";
    } 
    setColor(color) {
        this.color = color;
    }
};

class Triangle extends Shape {

    render() {
        return `<polygon points="100,10 150,190 50,190" fill="${this.color}" />`;
    }
};

class Circle extends Shape {
    
    render() {
        return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
    }
};

class Square extends Shape {

    render() {
        return `<rect width="120" height="120" x="40" y="40"  fill="${this.color}" />`
    }
};

module.exports = { Triangle, Circle, Square };
