var mainMenuPopup = document.querySelector('.js-main-menu'),
    mainMenuBtn   = document.querySelector('.js-main-menu-btn'),
    mainMenuIcon  = document.querySelector('.js-main-menu-icon'),

    prjMenuPopup  = document.querySelector('.js-prj-menu'),
    prjMenuBtn    = document.querySelector('.js-prj-menu-btn'),
    prjMenuIcon   = document.querySelector('.js-prj-menu-icon'),

    newsPopup     = document.querySelector('.js-news'),
    newsBtn       = document.querySelector('.js-news-btn'),
    newsIcon      = document.querySelector('.js-news-icon'),

    contactsPopup = document.querySelector('.js-contacts'),
    contactsBtn   = document.querySelector('.js-contacts-btn'),
    contactsIcon  = document.querySelector('.js-contacts-icon');

mainMenuBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (mainMenuPopup.classList.contains('js-hide')) {
    mainMenuPopup.classList.remove('js-hide')
    mainMenuIcon.classList.remove('css-icon--menu')
    mainMenuIcon.classList.add('css-icon--cross')
    if (!(newsPopup.classList.contains('js-hide'))) {
      newsPopup.classList.add('js-hide')
      newsIcon.classList.remove('css-icon--cross')
      newsIcon.classList.add('css-icon--hot')
    }
    if (!(prjMenuPopup.classList.contains('js-hide'))) {
      prjMenuPopup.classList.add('js-hide')
      prjMenuIcon.classList.remove('css-icon--cross')
      prjMenuIcon.classList.add('css-icon--briefcase')
    }
    if (!(contactsPopup.classList.contains('js-hide'))) {
      contactsPopup.classList.add('js-hide')
      contactsIcon.classList.remove('css-icon--cross')
      contactsIcon.classList.add('css-icon--info')
    }
  }
  else {
    mainMenuPopup.classList.add('js-hide');
    mainMenuIcon.classList.remove('css-icon--cross')
    mainMenuIcon.classList.add('css-icon--menu')
  }
});

prjMenuBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (prjMenuPopup.classList.contains('js-hide')) {
    prjMenuPopup.classList.remove('js-hide')
    prjMenuIcon.classList.remove('css-icon--briefcase')
    prjMenuIcon.classList.add('css-icon--cross')
    if (!(newsPopup.classList.contains('js-hide'))) {
      newsPopup.classList.add('js-hide')
      newsIcon.classList.remove('css-icon--cross')
      newsIcon.classList.add('css-icon--hot')
    }
    if (!(mainMenuPopup.classList.contains('js-hide'))) {
      mainMenuPopup.classList.add('js-hide')
      mainMenuIcon.classList.remove('css-icon--cross')
      mainMenuIcon.classList.add('css-icon--menu')
    }
    if (!(contactsPopup.classList.contains('js-hide'))) {
      contactsPopup.classList.add('js-hide')
      contactsIcon.classList.remove('css-icon--cross')
      contactsIcon.classList.add('css-icon--info')
    }
  }
  else {
    prjMenuPopup.classList.add('js-hide');
    prjMenuIcon.classList.remove('css-icon--cross')
    prjMenuIcon.classList.add('css-icon--briefcase')
  }
});

newsBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (newsPopup.classList.contains('js-hide')) {
    newsPopup.classList.remove('js-hide')
    newsIcon.classList.remove('css-icon--hot')
    newsIcon.classList.add('css-icon--cross')
    if (!(mainMenuPopup.classList.contains('js-hide'))) {
      mainMenuPopup.classList.add('js-hide')
      mainMenuIcon.classList.remove('css-icon--cross')
      mainMenuIcon.classList.add('css-icon--menu')
    }
    if (!(prjMenuPopup.classList.contains('js-hide'))) {
      prjMenuPopup.classList.add('js-hide')
      prjMenuIcon.classList.remove('css-icon--cross')
      prjMenuIcon.classList.add('css-icon--briefcase')
    }
    if (!(contactsPopup.classList.contains('js-hide'))) {
      contactsPopup.classList.add('js-hide')
      contactsIcon.classList.remove('css-icon--cross')
      contactsIcon.classList.add('css-icon--info')
    }
  }
  else {
    newsPopup.classList.add('js-hide');
    newsIcon.classList.remove('css-icon--cross')
    newsIcon.classList.add('css-icon--hot')
  }
});

contactsBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (contactsPopup.classList.contains('js-hide')) {
    contactsPopup.classList.remove('js-hide')
    contactsIcon.classList.remove('css-icon--info')
    contactsIcon.classList.add('css-icon--cross')
    if (!(newsPopup.classList.contains('js-hide'))) {
      newsPopup.classList.add('js-hide')
      newsIcon.classList.remove('css-icon--cross')
      newsIcon.classList.add('css-icon--hot')
    }
    if (!(mainMenuPopup.classList.contains('js-hide'))) {
      mainMenuPopup.classList.add('js-hide')
      mainMenuIcon.classList.remove('css-icon--cross')
      mainMenuIcon.classList.add('css-icon--menu')
    }
    if (!(prjMenuPopup.classList.contains('js-hide'))) {
      prjMenuPopup.classList.add('js-hide')
      prjMenuIcon.classList.remove('css-icon--cross')
      prjMenuIcon.classList.add('css-icon--briefcase')
    }
  }
  else {
    contactsPopup.classList.add('js-hide');
    contactsIcon.classList.remove('css-icon--cross')
    contactsIcon.classList.add('css-icon--info')
  }
});
