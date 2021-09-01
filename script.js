document.body.addEventListener('keydown', (event) => {
    playSound(event.code.toLowerCase());
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);

    audioElement ? audioElement.play() : console.log("tecla nao encontrada")
};