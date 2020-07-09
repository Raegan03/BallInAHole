import { Vector2 } from "./vector2";

export class Entity{

    constructor(
        public index: number,
        protected position: Vector2
    ){}

    DrawEntity(context: CanvasRenderingContext2D){}
}