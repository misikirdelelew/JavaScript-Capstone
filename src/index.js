import './index.css';
import listingsData from './modules/listingsData.js';

const listingsContainerEl = document.getElementById('listings');
listingsData.render(listingsContainerEl);
listingsData.updateLikes();
if (!window.localStorage.getItem('involvementAPIAppID')) {
  listingsData.createInvolvementTrackerApp();
}