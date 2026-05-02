export function init(){
    const cnv = document.querySelector('canvas');
    const ctx = cnv.getContext("2d");
    ctx.fillRect(0, 0, cnv.width, cnv.height);
}