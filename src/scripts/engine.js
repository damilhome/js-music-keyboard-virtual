const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');

let mapedKeys = [];
let audio = new Audio()

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150)
};

pianoKeys.forEach(key => {
    key.addEventListener('click', () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
})

document.addEventListener('keydown', event => {
    if(mapedKeys.includes(event.key)) {
        playTune(event.key);
    }
})

const handleVolume = event => {
    audio.volume = event.target.value;
}

volumeSlider.addEventListener('input', handleVolume);