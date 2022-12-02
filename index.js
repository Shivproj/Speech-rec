const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");
const label1 = document.getElementById("Name").innerHTML;
const label2 = document.getElementById("Age").innerHTML;
const btn = document.getElementById("submit");
btn.addEventListener("click", () =>{
    console.log(array);
})
let array = [];

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new window.SpeechRecognition();
recognition.interimResult = true;
recognition.addEventListener("result", (e) => {
  inp1.value = e.results[0][0].transcript;
  console.log(inp1.value);
});

function textToSpeech(label1) {
  let utterance = new SpeechSynthesisUtterance("Please" + label1);
  speechSynthesis.speak(utterance);
}
inp1.addEventListener("click", () => {
  recognition.addEventListener("result", (e) => {
    array.push(e.results[0][0].transcript);
    inp1.value = array[0];
  });
  if (!inp1.value) {textToSpeech(label1);
  recognition.start();}
  else recognition.stop()
});
inp2.addEventListener("click", () => {
  recognition.addEventListener("result", (e) => {
    array.push(e.results[0][0].transcript);
    inp2.value = array[1];
  });
  if (!inp2.value) 
  {textToSpeech(label2);
  recognition.start();}
  else recognition.stop();

});
btn.addEventListener
