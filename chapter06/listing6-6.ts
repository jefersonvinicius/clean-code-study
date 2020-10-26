import { Point } from './listing6-5';

class Square {
    topLeft: Point | undefined;
    side: number = 0;

    area() {
        return this.side * this.side;
    }
}

class Rectangle {
    topLeft: Point | undefined;
    height: number = 0;
    width: number = 0;

    area() {
        return this.height * this.width;
    }
}

class Circle {
    readonly PI = 3.141592653589793;
    center: Point | undefined;
    radius: number = 0;

    area() {
        return this.PI * this.radius * this.radius;
    }
}
