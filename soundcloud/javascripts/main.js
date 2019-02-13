/* 1. Search */

const UI = {
  setInputArea: () => {
    const inputArea = document.querySelector('.js-search');
    inputArea.addEventListener( 'keyup', e => {
      if (e.which === 13) SoundCloudAPI.getTracks(inputArea.value);
    });
  },

  setSubmitButton: () => {
    const searchButton = document.querySelector('.js-submit');
    const inputArea = document.querySelector('.js-search');

    searchButton.addEventListener( 'click', () => {
      SoundCloudAPI.getTracks(inputArea.value);
    });
  },

  setResetButton: () => {
    const resetButton = document.querySelector('#js-reset');
    const sideBar = document.querySelector('.inner');
    resetButton.addEventListener('click', () => {
      localStorage.clear();
      sideBar.innerHTML = '';
    });
  },

  setPlayList: () => {
    const sideBar = document.querySelector('.inner');
    sideBar.innerHTML = localStorage.getItem('playList')
  },

};

UI.setInputArea();
UI.setSubmitButton();
UI.setResetButton();
UI.setPlayList();

/* 2. SoundCloud API */

const SoundCloudAPI = {
  init: () => {
    SC.initialize({
      client_id: "cd9be64eeb32d1741c17cb39e41d254d"
    });
  },

  getTracks: inputValue => {
    SC.get("/tracks", {q: inputValue})
      .then(tracks => {
      console.log(tracks);
      SoundCloudAPI.renderTracks(tracks);
      })
      .catch(error => console.error(error));
  },

  /* 3. Display Cards*/
  renderTracks: (tracks) => {
    let searchResults = document.querySelector(".js-search-results");
    searchResults.innerHTML = '';

    tracks.forEach(track => {
      const card = document.createElement('div');
      card.classList.add("card");

      const imageDiv = document.createElement('div');
      imageDiv.classList.add('image');

      const imageImg  = document.createElement('img');
      imageImg.classList.add('image_img');
      imageImg.src = track.artwork_url || 'http://lorempixel.com/100/100/abstract';
      imageDiv.appendChild(imageImg);

      const content = document.createElement('div');
      content.classList.add('content');

      const header = document.createElement('div');
      header.classList.add('header');
      header.innerHTML = `<a href="${track.permalink_url}" target="_blank">${track.permalink}</a>`;

      const button = document.createElement('div');
      button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');
      button.addEventListener('click', () => {
        SoundCloudAPI.addPlaylist(track.permalink_url);
      });


      const icon = document.createElement('i');
      icon.classList.add('add', 'icon');

      const buttonText = document.createElement('span');
      buttonText.innerHTML = 'Add to playlist';

      content.appendChild(header);

      button.appendChild(icon);
      button.appendChild(buttonText);

      card.appendChild(imageDiv);
      card.appendChild(content);
      card.appendChild(button);

      searchResults.appendChild(card);
    });
  },

  /* 4. Add to playlist and play */
  addPlaylist: (trackURL) => {
    SC.oEmbed(trackURL, {
      auto_play: true
    }).then((embed) => {
      const sideBar = document.querySelector('.inner');
      const playBox = document.createElement('div');
      playBox.innerHTML = embed.html;
      sideBar.insertBefore(playBox, sideBar.firstChild);

      localStorage.setItem('playList', sideBar.innerHTML);

    });
  },
};

SoundCloudAPI.init();