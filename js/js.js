
function changeBGColor(btn){
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    red = Math.floor(Math.random() * 256);
    console.log(`RGB(${green}, ${blue}, ${red})`);
    document.getElementsByTagName("body")[0].style.backgroundColor = `RGB(${green}, ${blue}, ${red})`;
}