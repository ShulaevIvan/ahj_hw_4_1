import { validatePaySystem, validateCreditCard } from './alg';

export default class CardWidget {
  constructor(containerTag) {
    this.container = document.querySelector(containerTag);
    this.input = this.container.querySelector('.validate_input');
    this.btn = this.container.querySelector('.validate_btn');
    this.onSubmit = this.onSubmit.bind(this);
    this.allCards = this.container.querySelectorAll('.cards_img_block li');
  }

  bindToDom() {
    this.btn.addEventListener('click', this.onSubmit);
    this.allCards.forEach((item) => {
      item.classList.add('filter_active');
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.input.value = this.input.value.replace(/\s|\w /g, '');
    const checkValid = validateCreditCard(this.input.value);
    if (toString(this.input).length > 0 && checkValid) {
      const paySystem = validatePaySystem(Number(this.input.value));
      this.allCards.forEach((item) => {
        item.classList.add('filter_active');
        if (item.firstChild.classList.contains(paySystem.toLowerCase())) {
          item.classList.remove('filter_active');
        }
      });
    } else {
      this.input.classList.add('input_err');
    }
    this.input.value = '';
  }
}
