"use strict";

import { isPrime } from "./utilities.js";

export class CircleNumber{
    #TWO_PI;
    constructor(x,y,r,n){
        this.position = {x: x, y: y};
        this.radius = r * n;
        this.number = n;
        this.color = isPrime(this.number) ? 'yellow':'white';
        this.#TWO_PI = Math.PI*2;
    }
    moveToRight(s){
        s = s || 1;
        this.position.x-=s;
    }
    moveToLeft(s){
        s = s || 1;
        this.position.x+=s;
    }
    increaseRadius(){
        this.radius++;
    }
    decreaseRadius(){
        if(this.radius <= 0) return;
        this.radius--;
    }
    render(ctx){
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.arc(this.position.x, this.position.y, this.radius, 0, this.#TWO_PI);
        ctx.stroke();
    }
}