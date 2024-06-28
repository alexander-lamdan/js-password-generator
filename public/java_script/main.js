let rangeSlider = document.querySelector('#rangeBtn');
let passGeneratorOutput = document.querySelector('#range span');
rangeSlider.addEventListener('input',lengthPassword,false);

function lengthPassword(){
  
  passGeneratorOutput.innerHTML = rangeSlider.value;
  
}
lengthPassword();
