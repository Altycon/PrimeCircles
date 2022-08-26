import { random, scale, getWidth, getHeight, fixCanvas, isPrime} from "./utilities.js";
import { CircleNumber } from "./circle-number.js";
import { CircleNumberSet } from "./circle-number-set.js";
// Canvas
const PRIME_CANVAS = document.getElementById('PrimeNumberCanvas');
const PC_CTX = PRIME_CANVAS.getContext('2d'); 
const DPI = devicePixelRatio;

// Buttons
const MOVE_LEFT_BUTTON = document.getElementById('MLB'),
MOVE_RIGHT_BUTTON = document.getElementById('MRB'),
INCREASE_RADIUS = document.getElementById('ICRB'),
DECREASE_RADIUS = document.getElementById('DCRB');

const CONSTANT_RADIUS = 10;
const SETS = [];
const NUMBER_OF_SETS = 30;

function moveLeft(ev){
    ev.preventDefault();
    SETS.forEach( num => {
        num.set.forEach( set => {
            set.moveToLeft(50);
        })
    })
};
function moveRight(ev){
    ev.preventDefault();
    SETS.forEach( num => {
        num.set.forEach( set => {
            set.moveToRight(50);
        })
    })
};
function IncreaseRes(ev){
    ev.preventDefault();
    SETS.forEach( num => {
        num.set.forEach( set => {
            set.increaseRadius(2);
        })
    })
};
function DecreaseRes(ev){
    ev.preventDefault();
    SETS.forEach( num => {
        num.set.forEach( set => {
            set.decreaseRadius(2);
        })
    })
};
const isLoaded = ()=>{
    MOVE_LEFT_BUTTON.addEventListener('pointerdown', moveLeft);
    MOVE_RIGHT_BUTTON.addEventListener('click', moveRight);
    INCREASE_RADIUS.addEventListener('click', IncreaseRes);
    DECREASE_RADIUS.addEventListener('click', DecreaseRes);
};

const init = ()=>{
    fixCanvas(PRIME_CANVAS,DPI);
    const pc_width = getWidth(PRIME_CANVAS);
    const pc_height = getHeight(PRIME_CANVAS);

    for(let i = 0; i < NUMBER_OF_SETS; i++){
        SETS.push(new CircleNumberSet(i+1, CONSTANT_RADIUS, Math.round(pc_width/CONSTANT_RADIUS), pc_width,pc_height));
    }
    // for(let j = 0; j < SETS.length; j++){
    //     SETS[j].renderSet(PC_CTX);
    // }
    animateCanvas(PC_CTX, SETS);
};
function animateCanvas(PC_CTX, SETS){
    const w = getWidth(PRIME_CANVAS);
    const h = getHeight(PRIME_CANVAS);
    function animate(){
        
        PC_CTX.clearRect(0,0,w,h);
        for(let j = 0; j < SETS.length; j++){
            SETS[j].renderSet(PC_CTX);
        }
        requestAnimationFrame(animate);
    }
    animate();
};

document.addEventListener('DOMContentLoaded', isLoaded);
window.addEventListener('load', init);