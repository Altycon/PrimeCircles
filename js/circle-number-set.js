import { CircleNumber } from "./circle-number.js";

export class CircleNumberSet{
    constructor(num, radius,totalCirlces,w,h){
        this.number = num;
        this.radius = radius;
        this.diameter = this.radius*2;
        this.totalCirlces = totalCirlces;
        this.width = w;
        this.height = h;
        this.speed = 1;
        this.isMovingRight = false;
        this.isMovingLeft = false;
        this.isMovingUp = false;
        this.isMovingDown = false;
        this.set = [];
        this.numberRendered = 0;
        for(let i = 0; i < this.totalCirlces; i++){
            const x = (0 + this.radius) + (this.diameter* this.number * i) +(this.radius*this.number);
            const y = this.height*0.5;

            this.set.push(new CircleNumber(x,y,radius,this.number));
        }
    }
    moveSetRight(){
        this.set.forEach( num => {
            num.moveToRight(this.speed);
        })
    }
    moveSetLeft(){
        this.set.forEach( num => {
            num.moveToLeft(this.speed);
        })
    }
    moveSetUp(){
        this.set.forEach( num => {
            num.moveUpwards(this.speed);
        })
    }
    moveSetDown(){
        this.set.forEach( num => {
            num.moveDownwards(this.speed);
        })
    }
    renderSet(ctx){
        for(let i = 0; i < this.set.length; i++){
            if(this.set[i].position.x < this.width + this.set[i].radius && this.set[i].position.x > -this.set[i].radius){
                this.set[i].render(ctx);
                this.numberRendered++;
            }
        }
        //console.log(`Circle Number ${this.number} total rendered ${this.numberRendered}`)
    }
}