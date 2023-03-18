class ListingsData {
  constructor() {
    this.listings = [];
    this.realtorApiUrl = 'https://realty-in-us.p.rapidapi.com/properties/v3/list';
    this.baseURLInvAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.involvementAPIAppID = window.localStorage.getItem('involvementAPIAppID') || '';
  }

  createInvolvementTrackerApp = async () => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'text/plain',
      },
    };
    const response = await fetch(`${this.baseURLInvAPI}apps/`, options);
    const data = await response.text();
    window.localStorage.setItem('involvementAPIAppID', data);
  };

  getProperties = async () => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '0ab2689c00mshf814237c331556cp10bc14jsnfee9b6b48580',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
      },
      body: '{"limit":20,"offset":0,"baths":{"min":3},"list_price":{"max":900,"min":200},"beds":{"max":3,"min":1},"cats":true,"dogs":true,"state_code":"TX","status":["for_rent"],"type":["condos","condo_townhome_rowhome_coop","condo_townhome","townhomes","duplex_triplex","single_family","multi_family","apartment","condop","coop"],"sort":{"direction":"desc","field":"list_date"}}',
    };

    const response = await fetch(this.realtorApiUrl, options);
    const data = await response.json();
    console.log('data received from API: ', data);
    this.listings = data.data.home_search.results;
    return this.listings;
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
          console.log('like posted successfully, calling updateLikes...');
          this.updateLikes();
          return response.json();
        }
        throw new Error('Error posting like');
      });
  };

  getLikes = async () => {
    const response = await fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/likes/`);
    const data = await response.json();
    console.log('likes data recieved from API ', data);
    return data;
  };

  updateLikes = async () => {
    const likeCounters = document.querySelectorAll('.likes-count');
    likeCounters.forEach(async (counter, index) => {
      const likesData = await this.getLikes();
      console.log('likesData returned in updatelikes(): ', likesData);
      counter.innerHTML = `${likesData[index].likes} likes`;
    });
  };

  render = async (container) => {
    if (this.listings.length === 0) {
      this.listings = await this.getProperties();
      console.log('listings data in render(): ', this.listings);
    }
    this.listings.forEach((listing, i) => {
      console.log('this is loop iteration: ', i);
      const listingEl = document.createElement('div');
      listingEl.classList.add('listing');
      listingEl.setAttribute('data-id', listing.property_id);
      const listingImg = document.createElement('img');
      console.log('listing.primary_photo.href: ', listing.primary_photo.href);
      if (!listing.primary_photo.href) {
        listingImg.src = 'https://via.placeholder.com/300x200';
      } else listingImg.src = listing.primary_photo.href;
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
        <p>Location: ${listing.location.address.line}, ${listing.location.address.city}, ${listing.location.address.state}</p
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
      <p><span class = "bolden">Address: </span></br> ${listing.location.address.line}</p>
      <p><span class = "bolden">Cordinates: </span></br>
        [
          lat: ${listing.location.address.coordinate.lat},
          long: ${listing.location.address.coordinate.lon}
        ]
      </p>
    `;
    const commentsEl = document.createElement('div');
    commentsEl.classList.add('popup-comments');
    const commentsHeadingEl = document.createElement('h3');
    const response = await fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/comments?item_id=${listing.property_id}`);
    const data = await response.json();
    if (data.length > 0) {
      data.forEach((comment) => {
        const commentItem = document.createElement('p');
        commentItem.classList.add('comment');
        commentItem.innerHTML = `
          <span class="bolden">${comment.creation_date}</span>
          <span class="username">${comment.username}: </span>
          <span class="comment-text">${comment.comment}</span>
        `;
        commentsEl.appendChild(commentItem);
      });
    }
    commentsHeadingEl.textContent = `Comments (${data.length || 'no comments yet'})`;
    commentsEl.prepend(commentsHeadingEl);
    commentsEl.dataset.id = listing.property_id;
    const commentsForm = document.createElement('form');
    commentsForm.classList.add('comments-form');
    commentsForm.innerHTML = `
      <input type="text" name="name" placeholder="Your name" required>
      <textarea name="comment" placeholder="Your comment" required></textarea>
      <button type="submit">Submit</button>
    `;
    popupWrapEl.append(listingImg, closeBtn, listingTitle, popupDetails, commentsEl, commentsForm);
    container.appendChild(popupWrapEl);
    closeBtn.addEventListener('click', () => {
      popupWrapEl.remove();
    });

    commentsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = e.target.name.value;
      const comment = e.target.comment.value;
      this.addComment(listing.property_id, username, comment);
      e.target.reset();
      popupWrapEl.innerHTML = `
      <h2>Thank you for your comment!</h2>
      `;
      setTimeout(() => {
        popupWrapEl.remove();
      }, 3000);
    });
  }

  addComment = (id, username, comment) => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        item_id: `${id}`,
        username,
        comment,
      }),
    };

    fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/comments/`, options)
      .then((response) => response.json())
      .catch((error) => {
        throw new Error(error);
      });
  }
}

const listingsData = new ListingsData();
export default listingsData;