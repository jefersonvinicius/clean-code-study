export class Point {
    x: number = 0;
    y: number = 0;
}

class Square {
    topLeft: Point | undefined;
    side: number = 0;
}

class Rectangle {
    topLeft: Point | undefined;
    height: number = 0;
    width: number = 0;
}

class Circle {
    center: Point | undefined;
    radius: number = 0;
}

class Geometry {
    readonly PI = 3.141592653589793;

    area(shape: Object) {
        if (shape instanceof Square) {
            const s = shape as Square;
            return s.side * s.side;
        } else if (shape instanceof Rectangle) {
            const r = shape as Rectangle;
            return r.height * r.width;
        } else if (shape instanceof Circle) {
            const c = shape as Circle;
            return this.PI * c.radius * c.radius;
        }

        throw new Error('Shape object invalid');
    }
}
