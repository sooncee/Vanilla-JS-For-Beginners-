const body =document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber){
    const image = new Image();
    // image.src = `../images/${imgNumber}.jpg`
    const background = `images/${imgNumber}.jpg`
    document.querySelector('.bgImage').style.backgroundImage=`url(${background})`;
    // image.classList.add("bgImage");
    
}

function genRandom(){
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    console.log(number)
    return number;
    
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();