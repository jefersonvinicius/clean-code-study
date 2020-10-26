import { Point } from './listing6-5';

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
