let speach = new SpeechSynthesisUtterance();


let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speach.voice = voices[0];
    voices.forEach((voice,i) => (
        voiceSelect.options[i] = new Option(voice.name, i)))

};
voiceSelect.addEventListener("change",() => {
    speach.voice = voices[voiceSelect.selectedOptions[0].value];
})


document.querySelector("button").addEventListener("click", () => {
    speach.text = document.querySelector("#text").value;
    window.speechSynthesis.speak(speach);
})