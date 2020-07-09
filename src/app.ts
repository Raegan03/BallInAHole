import { Renderer } from "./renderer";
import { Circle } from "./circle";
import { Vector2 } from "./vector2";

export class App {

    readonly renderer: Renderer;

    testCircle: Circle;

    constructor() {
        this.renderer = new Renderer();

        this.testCircle = new Circle(0, new Vector2(this.renderer.rendererCanvas.width / 2, this.renderer.rendererCanvas.height / 2), 20, "#333");
        this.StartGame();
    }

    StartGame(){
        window.requestAnimationFrame((t) => this.Update(t));
    }

    Update(timestamp: number){

        this.renderer.ClearRenderer();
        //Logic

        this.renderer.RenderEntites([this.testCircle]);

        console.log(timestamp);
        window.requestAnimationFrame(this.Update);
    }
}