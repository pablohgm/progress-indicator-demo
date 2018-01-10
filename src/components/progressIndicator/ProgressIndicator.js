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
}

  toggleCard() {
    console.log("Element was clicked!");
  }
}

export default ProgressIndicator;
