import { Entity } from "./entity";
import { Vector2 } from "./vector2";

export class Circle extends Entity{

    constructor(
        index: number,
        position: Vector2,
        private radius: number,
        private colour: string
    ){
        super(index, position);
    }

    DrawEntity(context: CanvasRenderingContext2D){
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.colour;
        context.fill();
        context.closePath
    }
}