"use strict";

class Timeline {
  constructor(obj) {
    if (obj.element == undefined) {
      console.warn("Timeline class must have an element");
    }
    this.element = obj.element || document;
    this.steps = obj.steps || [1, 1, 1, 0];
    this.primaryColor = obj.primaryColor || "red";
    this.secondColor = obj.secondColor || "white";

    let code = "";
    let filledLen = 0;

    code += "<div class='line'> \n";
    for (let i = 0; i < this.steps.length; i++) {
      if (this.steps[i] == 1) {
        code += "<div class='benchmark full'></div> \n";
        filledLen = i;
      } else if (this.steps[i] == 0) {
        code += "<div class='benchmark empty'></div> \n";
      }
    }
    code += "</div> \n\n";
    
    let len = filledLen*(100/4)+12;
    if (filledLen+1 == this.steps.length) {
      len = 100;
    }else if (filledLen == 0) {
      len = 0;
    }
    
    code +=
      "<style>:root {--colorOne: "+this.primaryColor+"; --colorTwo: "+this.secondColor+";} .line {box-shadow: 0 0 3px 1px var(--colorOne);background: linear-gradient(to right, var(--colorOne), var(--colorOne) "+len+"%, var(--colorTwo) "+len+"%); height: 5vh; width: 80vw; border-radius: 2vh; position: relative;display: grid; grid-template-columns: auto auto auto auto;  place-items: center;}.benchmark {  width: 10vh;  height: 10vh;  border-radius: 50%;  transform: translate(0, -25%);}.empty {  box-shadow: 0 0 3px 1px var(--colorOne);  background: var(--colorTwo);}.full {  box-shadow: 0 0 0 2vh var(--colorOne), 0 0 5px 2vh grey;  background: var(--colorOne);}";

    this.element.innerHTML = code;
    console.log(filledLen);
  }
}
