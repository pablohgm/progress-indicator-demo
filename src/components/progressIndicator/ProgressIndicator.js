import template from './progress-indicator-template.html'
import style from './progress-indicator.css'

class ProgressIndicator extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback(){
    this.innerHTML = `<style>${style}</style>${template}`;
    let indicator = this.getAttribute('indicator');
    let target = this.getAttribute('target');
    this.updatePending(indicator, target);
    this.updateTarget(target);
    this.updateIndicator(indicator);
    this.animate(indicator, target);
  }

  updatePending(indicator, target) {
    let pending = target - indicator;
    this.getElementsByClassName('pi__message')[0].innerHTML = `You need $${pending} more to reach your target.`;
  }

  updateTarget(target) {
    this.getElementsByClassName('pi__target-text')[0].innerHTML = `Target $${target}`;
  }

  updateIndicator(target) {
    this.getElementsByClassName('pi__indicator')[0].innerHTML = `$${target}`;
  }

  animate(indicator, target) {
    let max = Math.round((100*indicator)/target);
    let element = document.getElementsByClassName("pi__progress-bar")[0];
    let tmpIndicator = document.getElementsByClassName('pi__indicator')[0];
    let width = 1;
    
    let id = setInterval(() => {
      if (width >= max) {
        clearInterval(id);
      } else {
          width++; 
          element.style.width = width + '%'; 
      }
    }, 100);

    let idIndicator = setInterval(() => {
      if (width >= indicator) {
        clearInterval(idIndicator);
      } else {
          width++; 
          tmpIndicator.innerHTML = `$${width}`;
      }
    }, 100);
  }
}

export default ProgressIndicator;
