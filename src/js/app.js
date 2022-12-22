import alg from '../components/card_widget/alg'
import CardWidget from '../components/card_widget/card_widget'

window.addEventListener('DOMContentLoaded', () => {
    const cardWidget = new CardWidget('.container');
    cardWidget.bindToDom()
});