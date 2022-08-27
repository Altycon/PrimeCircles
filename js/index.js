import { random, scale, getWidth, getHeight, fixCanvas, setInputValue} from "./utilities.js";
import { CircleNumber } from "./circle-number.js";
import { CircleNumberSet } from "./circle-number-set.js";
// Canvas
const PRIME_CANVAS = document.getElementById('PrimeNumberCanvas');
const PC_CTX = PRIME_CANVAS.getContext('2d'); 
const DPI = devicePixelRatio;

// Buttons
const MOVE_LEFT_BUTTON = document.getElementById('MLB'),
MOVE_RIGHT_BUTTON = document.getElementById('MRB'),
MOVE_UP_BUTTON = document.getElementById('MUB'),
MOVE_DOWN_BUTTON = document.getElementById('MDB'),
SPEED_SLIDER = document.getElementById('SpeedSlider');

const CONSTANT_RADIUS = 1;
const SETS = [];
const NUMBER_OF_SETS = Math.floor(innerHeight*0.4);
console.log(NUMBER_OF_SETS)

function moveLeft(ev){
    ev.preventDefault();
    SETS.forEach( set => {
        set.isMovingLeft = true;
    })
};
function moveRight(ev){
    ev.preventDefault();
    SETS.forEach( set => {
        set.isMovingRight = true;
    })
};
function stopMoving(){
    SETS.forEach( set => {
        set.isMovingRight = false;
        set.isMovingLeft = false;
        set.isMovingUp = false;
        set.isMovingDown = false;
    })
}
function moveUp(ev){
    ev.preventDefault();
    SETS.forEach( set => {
        set.isMovingUp = true;
    })
};
function moveDown(ev){
    ev.preventDefault();
    SETS.forEach( set => {
        set.isMovingDown = true;
    })
};
function changeSpeed(ev){
    const value = +ev.currentTarget.value;
    document.getElementById('SpeedDisplay').innerText = value.toString();
    SETS.forEach( set => {
        set.speed = value;
    })
}
const isLoaded = ()=>{
    setInputValue(SPEED_SLIDER, 0, 100, 20, 1);
    MOVE_LEFT_BUTTON.addEventListener('pointerdown', moveLeft);
    MOVE_LEFT_BUTTON.addEventListener('pointerup', stopMoving);
    MOVE_RIGHT_BUTTON.addEventListener('pointerdown', moveRight);
    MOVE_RIGHT_BUTTON.addEventListener('pointerup', stopMoving);
    MOVE_UP_BUTTON.addEventListener('pointerdown', moveUp);
    MOVE_UP_BUTTON.addEventListener('pointerup', stopMoving);
    MOVE_DOWN_BUTTON.addEventListener('pointerdown', moveDown);
    MOVE_DOWN_BUTTON.addEventListener('pointerup', stopMoving);
    SPEED_SLIDER.addEventListener('input', changeSpeed)
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
            const SET = SETS[j];
            if(SET.isMovingRight){
                SET.moveSetRight();
            }
            if(SET.isMovingLeft){
                SET.moveSetLeft();
            }
            if(SET.isMovingUp){
                SET.moveSetUp();
            }
            if(SET.isMovingDown){
                SET.moveSetDown();
            }
            SET.renderSet(PC_CTX);
        }
        requestAnimationFrame(animate);
    }
    animate();
};

document.addEventListener('DOMContentLoaded', isLoaded);
window.addEventListener('load', init);