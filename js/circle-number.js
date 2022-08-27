"use strict";

import { scale, isPrime } from "./utilities.js";

export class CircleNumber{
    #TWO_PI;
    constructor(x,y,r,n){
        this.position = {x: x, y: y};
        this.radius = r * n;
        this.number = n;
        this.color = `hsl(${scale(this.number,0,3,0,360)} 100% 50%)` //isPrime(this.number) ? 'red':'white';
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
    moveUpwards(s){
        s = s || 1;
        this.position.y+=s;
    }
    moveDownwards(s){
        s = s || 1;
        this.position.y-=s;
    }
    increaseRadius(r){
        r = r || 1;
        this.radius++;
    }
    decreaseRadius(r){
        r = r || 1;
        if(this.radius <= 0) return;
        this.radius--;
    }
    render(ctx){
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        // ctx.font = `${this.number*2}px`;
        // ctx.fillStyle = 'white';
        // ctx.textAlign = 'center';
        // ctx.fillText(`${this.number}`, this.position.x, this.position.y - this.radius)
        ctx.arc(this.position.x, this.position.y, this.radius, 0, this.#TWO_PI);
        ctx.stroke();
    }
}