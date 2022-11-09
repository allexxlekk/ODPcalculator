function updateScreen(text){
    const screen = document.querySelector('.screen');
    screen.innerText = text;
}

function addToScreen(text){
    const screen = document.querySelector('.screen');
    if(screen.innerText == '0')
        updateScreen(text);
    else 
        screen.innerText += text;
}

const digits = document.querySelectorAll(".digit");
digits.forEach(digit => {
    digit.addEventListener("click", e => addToScreen(e.target.innerText))
});

const cBtn = document.querySelector('#c');
cBtn.addEventListener("click", () => updateScreen('0'));