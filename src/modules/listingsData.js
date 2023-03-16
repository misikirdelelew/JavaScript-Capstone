class ListingsData {
  constructor() {
    this.listings = JSON.parse(window.localStorage.getItem('listings')) || [];
    this.realtorApiUrl = 'https://realty-in-us.p.rapidapi.com/properties/v3/list';
    this.baseURLInvAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.involvementAPIAppID = window.localStorage.getItem('involvementAPIAppID') || '';
  }

  getProperties = async () => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '0ab2689c00mshf814237c331556cp10bc14jsnfee9b6b48580',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
      },
      body: '{"limit":200,"offset":0,"baths":{"min":3},"list_price":{"max":900,"min":200},"beds":{"max":3,"min":1},"cats":true,"dogs":true,"state_code":"TX","status":["for_rent"],"type":["condos","condo_townhome_rowhome_coop","condo_townhome","townhomes","duplex_triplex","single_family","multi_family","apartment","condop","coop"],"sort":{"direction":"desc","field":"list_date"}}',
    };

    const response = await fetch(this.realtorApiUrl, options);
    const data = await response.json();
    this.listings = data.data.home_search.results;
    window.localStorage.setItem('listings', JSON.stringify(this.listings));
  };

  createInvolvementTrackerApp = async () => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'text/plain',
      },
    };
    const response = await fetch(`${this.baseURLInvAPI}apps/`, options);
    const data = await response.text();
    window.localStorage.setItem('involvementAPIAppID', await data);
  };

  postLike = (id) => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        item_id: `${id}`,
      }),
    };

    fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/likes/`, options)
      .then((response) => {
        if (response.ok) {
          this.updateLikes();
          return response.json();
        }
        throw new Error('Error posting like');
      });
  };

  getLikes = async () => {
    const response = await fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/likes/`);
    const data = await response.json();
    return data;
  };

  updateLikes = async () => {
    const likeCounters = document.querySelectorAll('.likes-count');
    likeCounters.forEach(async (counter, index) => {
      const likesData = await this.getLikes();
      counter.innerHTML = `${likesData[index].likes} likes`;
    });
  };

  render = (container) => {
    this.listings.forEach((listing, i) => {
      if (i > 8) return;
      const listingEl = document.createElement('div');
      listingEl.classList.add('listing');
      listingEl.setAttribute('data-id', listing.property_id);
      const listingImg = document.createElement('img');
      listingImg.src = listing.primary_photo.href;
      const listingTitle = document.createElement('div');
      listingTitle.classList.add('listing-title');
      listingTitle.innerHTML = `
        <h3>Rate: $${listing.list_price || 'not available'} per month</h3>
        <div class="likes-info">
          <button class="like-btn" id="${listing.property_id}"></button>
          <small class="likes-count">0 likes</small>
        </div>
      `;
      const listingLocation = document.createElement('div');
      listingLocation.classList.add('listing-location');
      listingLocation.innerHTML = `
        <p>Location: ${listing.location.address.city}, ${listing.location.address.state}, ${listing.location.address.country}</p>
        <p>Cordinates:
          latitude: ${listing.location.address.coordinate.lat}
          longitude: ${listing.location.address.coordinate.lon}
        </p>
      `;
      const commentsEl = document.createElement('span');
      commentsEl.classList.add('comments');
      commentsEl.textContent = 'Comments';
      commentsEl.dataset.id = listing.property_id;
      listingEl.append(listingImg, listingTitle, listingLocation, commentsEl);
      container.appendChild(listingEl);

      const likeBtn = document.querySelector(`[data-id="${listing.property_id}"] .like-btn`);
      likeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.postLike(e.target.id);
      });

      commentsEl.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('comments clicked');
        this.renderComments(listing, document.getElementById('main-content-wrap'));
      });
    });
    const listingsCount = document.querySelectorAll('.listing');
    const sectionTitle = document.getElementById('main-section-title');
    sectionTitle.innerHTML = `Top Rent Listings (${listingsCount.length})`;
  };

  renderComments = async (listing, container) => {
    const popupWrapEl = document.createElement('div');
    popupWrapEl.classList.add('popup-wrap');
    popupWrapEl.setAttribute('data-id', listing.property_id);
    const listingImg = document.createElement('img');
    listingImg.src = listing.primary_photo.href;
    listingImg.classList.add('popup-img');
    const closeBtn = document.createElement('img');
    closeBtn.src = 'https://img.icons8.com/ios/50/000000/close-window.png';
    closeBtn.classList.add('popup-close-btn');
    const listingTitle = document.createElement('h2');
    listingTitle.classList.add('listing-title');
    listingTitle.textContent = `Rate: $${listing.list_price || 'not available'} per month`;
    const popupDetails = document.createElement('div');
    popupDetails.classList.add('popup-details');
    popupDetails.innerHTML = `
      <p><span class = "bolden">City: </span> ${listing.location.address.city} </p>
      <p><span class = "bolden">State: </span> ${listing.location.address.state} </p>
      <p><span class = "bolden">Address: </span> ${listing.location.address.line}</p>
      <p><span class = "bolden">Cordinates: </span>
        [
          lat: ${listing.location.address.coordinate.lat},
          long: ${listing.location.address.coordinate.lon}
        ]
      </p>
    `;
    const commentsEl = document.createElement('span');
    commentsEl.classList.add('comments');
    commentsEl.textContent = 'Comments (0)';
    commentsEl.dataset.id = listing.property_id;
    popupWrapEl.append(listingImg, closeBtn, listingTitle, popupDetails, commentsEl);
    container.appendChild(popupWrapEl);

    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      popupWrapEl.style.display = 'none';
    });
  };
}

const listingsData = new ListingsData();
export default listingsData;