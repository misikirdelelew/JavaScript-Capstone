import './index.css';
import './styles/main.css';
import { retriveAllData, countShows } from './modules/dom-utils.js';
import setPopup from './modules/popUp_element.js';
import listingsData from './modules/listingsData.js';

const main = document.querySelector('.main');

window.onload = () => retriveAllData().then(() => {
  countShows();
});
setPopup(main);

const listingsContainerEl = document.getElementById('listings');
listingsData.render(listingsContainerEl);
listingsData.updateLikes();
