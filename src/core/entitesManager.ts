import { Entity } from "../entities/entity";
import { Circle } from "../entities/circle";
import { Vector2 } from "../math/vector2";
import { Physic } from "../math/physic";

export class EntitesManager{

    readonly playerRadius = 30;
    readonly wrongRadius = 20;
    readonly correctRadius = 30;

    playerEntity: Entity;
    correctEntity: Entity;

    wrongEntites: Entity[];

    allEntites: Entity[];

    constructor(
        private wrongHolesCount: number
    ){
        this.allEntites = [];
        this.wrongEntites = [];
    }

    SpawnEntites(canvasSize: Vector2){
        this.playerEntity = new Circle(0, new Vector2(canvasSize.x / 2, canvasSize.y / 2), 
        this.playerRadius, 'Player');

        this.allEntites.push(this.playerEntity)

        this.correctEntity = new Circle(1, new Vector2((canvasSize.x - this.correctRadius) * Math.random(), 
        (canvasSize.y - this.correctRadius) * Math.random()), 
        this.correctRadius, 'CorrectHole');

        this.allEntites.push(this.correctEntity)

        for (let i = 0; i < this.wrongHolesCount; i++){
            const entity = new Circle(2 + i, new Vector2((canvasSize.x - this.wrongRadius) * Math.random(), 
            (canvasSize.y - this.wrongRadius) * Math.random()), 
            this.wrongRadius, 'WrongHole');

            if(Physic.CheckCircleCollisionWithCircle(this.playerEntity as Circle, entity)){
                i--;
                continue;
            }

            this.wrongEntites.push(entity);
            this.allEntites.push(entity)
        }
    }
}