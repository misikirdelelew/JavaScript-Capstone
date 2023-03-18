class ListingsData {
  constructor() {
    this.listings = [];
    this.realtorApiUrl = 'https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/';
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
    const urls = Array.from({ length: 20 }, (_, i) => `https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/${i + 20}`);
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const pokemonData = await Promise.all(responses.map((response) => response.json()));
    this.listings = pokemonData.map((pokemon) => ({
      name: pokemon.name,
      id: pokemon.id,
      image: pokemon.sprites.front_default,
      types: pokemon.types.map((type) => type.type.name).join(', '),
      abilities: pokemon.abilities.map((ability) => ability.ability.name).join(', '),
      species: pokemon.species.name,
      height: pokemon.height,
      weight: pokemon.weight,
    }));
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
          this.updateLikes(id);
          return response.status;
        }
        throw new Error('Error posting like');
      });
  };

  getLikes = async () => {
    const response = await fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/likes/`);
    const data = await response.json();
    return data;
  };

  updateLikes = async (id) => {
    const likesData = await this.getLikes();
    const targetObject = likesData.find((ele) => ele.item_id === id);
    const targetEle = document.querySelector(`#likes-${id}`);
    targetEle.textContent = targetObject.likes;
  };

  render = async (container) => {
    if (this.listings.length === 0) {
      this.listings = await this.getProperties();
    }
    this.listings.forEach((listing) => {
      const listingEl = document.createElement('div');
      listingEl.classList.add('listing');
      listingEl.setAttribute('data-id', listing.id);
      const listingImg = document.createElement('img');
      listingImg.src = listing.image;
      const listingTitle = document.createElement('div');
      listingTitle.classList.add('listing-title');
      listingTitle.innerHTML = `
        <div class="likes-info">
          <button class="like-btn" id="${listing.id}"></button>
          <small class="likes-count" id="likes-${listing.id}">0 likes</small>
        </div>
      `;
      const commentsEl = document.createElement('span');
      commentsEl.classList.add('comments');
      commentsEl.textContent = 'Comments';
      commentsEl.dataset.id = listing.id;
      listingEl.append(listingImg, listingTitle, commentsEl);
      container.appendChild(listingEl);

      const likeBtn = document.querySelector(`[data-id="${listing.id}"] .like-btn`);
      likeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.postLike(e.target.id);
      });

      commentsEl.addEventListener('click', (e) => {
        e.preventDefault();
        this.renderCommentsPopup(listing, document.getElementById('main-content-wrap'));
      });
    });
    const listingsCount = document.querySelectorAll('.listing');
    const sectionTitle = document.getElementById('main-section-title');
    sectionTitle.innerHTML = `Top Rent Listings (${listingsCount.length})`;
  };

  renderCommentsPopup = async (listing, container) => {
    const popupWrapEl = document.createElement('div');
    popupWrapEl.classList.add('popup-wrap');
    popupWrapEl.setAttribute('data-id', listing.id);
    const listingImg = document.createElement('img');
    listingImg.src = listing.image;
    listingImg.classList.add('popup-img');
    const closeBtn = document.createElement('img');
    closeBtn.src = 'https://img.icons8.com/ios/50/000000/close-window.png';
    closeBtn.classList.add('popup-close-btn');
    const listingTitle = document.createElement('h2');
    listingTitle.classList.add('listing-title');
    listingTitle.textContent = listing.name + listing.id;
    const popupDetails = document.createElement('div');
    popupDetails.classList.add('popup-details');
    popupDetails.innerHTML = `
      <p><span class = "bolden">Type: </span> ${listing.types} </p>
      <p><span class = "bolden">Ability: </span> ${listing.abilities} </p>
      <p><span class = "bolden">Species: </span></br> ${listing.species}</p>
      <p><span class = "bolden">Cordinates: </span></br>
        [
          height: ${listing.height},
          weight: ${listing.weight}
        ]
      </p>
    `;
    const popupCommentsEl = document.createElement('div');
    popupCommentsEl.classList.add('popup-comments');
    const commentsHeadingEl = document.createElement('h3');
    const response = await fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/comments?item_id=${listing.id}`);
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
        popupCommentsEl.appendChild(commentItem);
      });
    }
    commentsHeadingEl.textContent = `Comments (${data.length || 'no comments yet'})`;
    popupCommentsEl.dataset.id = listing.id;
    const commentsForm = document.createElement('form');
    commentsForm.classList.add('comments-form');
    commentsForm.innerHTML = `
      <input type="text" name="name" placeholder="Your name" required>
      <textarea name="comment" placeholder="Your comment" required></textarea>
      <button type="submit">Submit</button>
    `;
    popupWrapEl.append(
      listingImg,
      closeBtn,
      listingTitle,
      popupDetails,
      popupCommentsEl,
      commentsForm,
    );
    popupWrapEl.insertBefore(commentsHeadingEl, popupWrapEl.children[4]);
    container.appendChild(popupWrapEl);
    closeBtn.addEventListener('click', () => {
      popupWrapEl.remove();
    });

    commentsForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = e.target.name.value;
      const comment = e.target.comment.value;
      this.addComment(listing.id, username, comment);
      const maincontentwrap = document.getElementById('main-content-wrap');
      const response = await fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/comments?item_id=${listing.id}`);
      const data = await response.json();
      popupCommentsEl.innerHTML = '';
      if (data.length > 0) {
        data.forEach((comment) => {
          const commentItem = document.createElement('p');
          commentItem.classList.add('comment');
          commentItem.innerHTML = `
          <span class="bolden">${comment.creation_date}</span>
          <span class="username">${comment.username}: </span>
          <span class="comment-text">${comment.comment}</span>
        `;
          popupCommentsEl.appendChild(commentItem);
        });
      }
      this.renderCommentsPopup(listing, maincontentwrap);
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
      .then((response) => response.status)
      .catch((error) => {
        throw new Error(error);
      });
  }
}

const listingsData = new ListingsData();
export default listingsData;