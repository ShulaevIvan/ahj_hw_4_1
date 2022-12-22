import validateCreditCard from './alg';
import { validatePaySystem } from './alg'

export default class CardWidget {
    constructor(containerTag) {
        this.container = document.querySelector(containerTag);
        this.input = this.container.querySelector('.validate_input');
        this.btn = this.container.querySelector('.validate_btn');
        this.onInput = this.onInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.allCards = this.container.querySelectorAll('.cards_img_block li');
    }

    bindToDom() {
        this.input.addEventListener('input', this.onInput)
        this.btn.addEventListener('click', this.onSubmit)
        this.allCards.forEach((item) => {
            item.classList.add('filter_active');
        });

    }

    onInput(e) {
        e.preventDefault();
    }

    onSubmit(e) {
        this.input.value = this.input.value.replace(/\s|\w  /g, '');
        const checkValid = validateCreditCard(this.input.value);
        if (toString(this.input).length > 0 && checkValid) {
            let paySystem = validatePaySystem(Number(this.input.value))
            this.allCards.forEach((item) => {
                if (item.firstChild.classList.contains(paySystem.toLowerCase())) {
                    console.log(paySystem.toLocaleLowerCase())
                    item.classList.remove('filter_active')
                }
            });
        }
    }


}