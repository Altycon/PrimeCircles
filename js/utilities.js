export const random = (min,max,bool)=> bool ? Math.floor(Math.random()*(max-min)+min):Math.random()*(max-min)+min;
export const scale = (num, InMin, InMax, OutMin, OutMax)=>{
    return (num - InMin)*(OutMax-OutMin)/(InMax-InMin)+OutMin;
}
export function getWidth(element){
    const w = +getComputedStyle(element).getPropertyValue('width').slice(0,-2);
    if(element.nodeName == 'CANVAS'){
        return w * devicePixelRatio;
    }else{
        return w;
    }
}
export function getHeight(element){
    if(!element){
        throw new Error('Argument must be an html element');
    }
    const h = +getComputedStyle(element).getPropertyValue('height').slice(0,-2);
    if(element.nodeName == 'CANVAS'){
        return h * devicePixelRatio;
    }else{
        return h;
    }
}
export const fixCanvas = (canvas,dpi)=>{
    const style_width = +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
    const style_height = +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
    canvas.setAttribute('width', style_width * dpi);
    canvas.setAttribute('height', style_height * dpi);
}

export function isPrime(nbr){
    for(var i = 2; i < nbr; i++)
        if(nbr%i === 0) return false;
    return nbr > 1;
}