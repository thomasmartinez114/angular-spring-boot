export abstract class Shape {

    // Constructor

    constructor(private _x: number, private _y: number) {

    }

    // Getters and Setters
    
    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
    }

    // Method

    getInfo(): string {
        return `x=${this._x}, y=${this._y}`;
    }

    abstract calculateArea(): number;


}