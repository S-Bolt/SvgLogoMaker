
class Shape {
    constructor(color){
        this.color = color || "";
    } 
};

class Triangle extends Shape {
    constructor(color){
        super(color);
    }
    
    render() {
        return '<polygon points="100,10 150,190 50,190" fill="${this.color}"/>';
    }
}
