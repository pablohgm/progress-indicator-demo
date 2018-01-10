import template from './progress-indicator-template.html'
import style from './progress-indicator.css'

class ProgressIndicator extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback(){
    this.innerHTML = `<style>${style}</style>${template}`;
    this.addEventListener('click', e => {
      this.toggleCard();
    });
    let indicator = this.getAttribute('indicator');
    let target = this.getAttribute('target');
    //this.updatePending(indicator, target);
    //this.updateTarget(target);
    this.animate(indicator);
  }

  updatePending(indicator, target) {
    let pending = target - indicator;
    this.getElementsByClassName('pi__message')[0].innerHTML = `You need $${pending} more to reach your target.`;
  }

  updateTarget(target) {
    this.getElementsByClassName('pi__target-panel')[0].innerHTML = `Target $${target}`;
  }

  // TODO: delete
  attributeChangedCallback(attrName, oldVal, newVal) { 
    console.log(attrName);
    console.log(oldVal);
    console.log(newVal);
  };

  toggleCard() {
    console.log("Element was clicked!");
  }

  animate(indicator) {
    let element = document.getElementsByClassName("pi__progress-bar")[0]; 
    let width = 1;
    let id = setInterval(() => {
      if (width >= indicator) {
        clearInterval(id);
      } else {
          width++; 
          element.style.width = width + '%'; 
      }
    }, 100);
  }
}

export default ProgressIndicator;
