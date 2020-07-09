import { Renderer } from "./renderer";
import { Circle } from "../entities/circle";
import { Vector2 } from "../math/vector2";
import { EntitesManager } from "./entitesManager";

export class App {

    readonly renderer: Renderer;
    readonly entitiesManager: EntitesManager;

    constructor() {
        this.renderer = new Renderer();

        this.entitiesManager = new EntitesManager(20);
        this.StartGame();
    }

    StartGame(){
        this.entitiesManager.SpawnEntites(this.renderer.GetCanvasSize());
        window.requestAnimationFrame((t) => this.Update(t));
    }

    Update(timestamp: number){

        this.renderer.ClearRenderer();
        //Logic

        this.renderer.RenderEntites(this.entitiesManager.allEntites);

        console.log(timestamp);
        window.requestAnimationFrame(this.Update);
    }
}