const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");
const label1 = document.getElementById("Name").innerHTML;
const label2 = document.getElementById("Age").innerHTML;
const btn = document.getElementById("submit");
btn.addEventListener("click", () =>{
    
})
let details = {Name:"",Age:""};

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new window.SpeechRecognition();
recognition.interimResult = true;

function textToSpeech(label) {
  let utterance = new SpeechSynthesisUtterance("Please" + label);
  speechSynthesis.speak(utterance);
}
inp1.addEventListener("click", () => {
  recognition.addEventListener("result", (e) => {
    if(details.Name) {e.results[0].pop()}    
    details.Name = e.results[0][0].transcript; 
    inp1.value=details.Name;
 
  });
  if (!inp1.value) {
    textToSpeech(label1);
  recognition.start();}
  else recognition.stop()
});
inp2.addEventListener("click", () => {
  recognition.addEventListener("result", (e) => {
    if(details.Age) {e.results[0].pop()}
  details.Age=e.results[0][0].transcript;
  inp2.value=details.Age;

   
  });
  if (!inp2.value) 
  {textToSpeech(label2);
  recognition.start();}
  else recognition.stop();

});
btn.addEventListener
