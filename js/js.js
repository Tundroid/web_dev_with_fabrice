
function changeBGColor(btn){
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    red = Math.floor(Math.random() * 256);
    console.log(`RGB(${green}, ${blue}, ${red})`);
    document.getElementsByTagName("body")[0].style.backgroundColor = `RGB(${green}, ${blue}, ${red})`;
}

function addFont(btn){
    currentSize = parseInt(getComputedStyle(document.getElementById("head0")).fontSize);
    newSize = currentSize + 1;
    document.getElementById("head0").style.fontSize = newSize + 'px';
    console.log("Font Size added");
}
function reduceFont(btn){
    currentSize = parseInt(getComputedStyle(document.getElementById("head0")).fontSize);
    newSize = currentSize - 1;
    document.getElementById("head0").style.fontSize = newSize + 'px';
    console.log("Font Size reduced");
}
    