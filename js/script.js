var newsSection  = document.querySelector('.js-news'),
    newsOpenBtn  = document.querySelector('.js-news-open'),
    newsCloseBtn = document.querySelector('.js-news-close'),
    mainMenuSection  = document.querySelector('.js-main-menu'),
    mainMenuOpenBtn  = document.querySelector('.js-main-menu-open'),
    mainMenuCloseBtn = document.querySelector('.js-main-menu-close');
    prjMenuSection  = document.querySelector('.js-prj-menu'),
    prjMenuOpenBtn  = document.querySelector('.js-prj-menu-open'),
    prjMenuCloseBtn = document.querySelector('.js-prj-menu-close'),
    contactsSection  = document.querySelector('.js-contacts'),
    contactsOpenBtn  = document.querySelector('.js-contacts-open'),
    contactsCloseBtn = document.querySelector('.js-contacts-close');
newsOpenBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (newsSection.classList.contains('js-hide')) {
    newsSection.classList.remove('js-hide')
    if (!(mainMenuSection.classList.contains('js-hide'))) {
        mainMenuSection.classList.add('js-hide')
    }
    if (!(prjMenuSection.classList.contains('js-hide'))) {
        prjMenuSection.classList.add('js-hide')
    }
    if (!(contactsSection.classList.contains('js-hide'))) {
        contactsSection.classList.add('js-hide')
    }
  }
  else {
    newsSection.classList.add('js-hide');
  }
});
newsCloseBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (!(newsSection.classList.contains('js-hide'))) {
      newsSection.classList.add('js-hide')
  }
});
mainMenuOpenBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (mainMenuSection.classList.contains('js-hide')) {
    mainMenuSection.classList.remove('js-hide')
    if (!(newsSection.classList.contains('js-hide'))) {
        newsSection.classList.add('js-hide')
    }
    if (!(prjMenuSection.classList.contains('js-hide'))) {
        prjMenuSection.classList.add('js-hide')
    }
    if (!(contactsSection.classList.contains('js-hide'))) {
        contactsSection.classList.add('js-hide')
    }
  }
  else {
    mainMenuSection.classList.add('js-hide');
  }
});
mainMenuCloseBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (!(mainMenuSection.classList.contains('js-hide'))) {
      mainMenuSection.classList.add('js-hide')
  }
});
prjMenuOpenBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (prjMenuSection.classList.contains('js-hide')) {
    prjMenuSection.classList.remove('js-hide')
    if (!(newsSection.classList.contains('js-hide'))) {
        newsSection.classList.add('js-hide')
    }
    if (!(mainMenuSection.classList.contains('js-hide'))) {
        mainMenuSection.classList.add('js-hide')
    }
    if (!(contactsSection.classList.contains('js-hide'))) {
        contactsSection.classList.add('js-hide')
    }
  }
  else {
    prjMenuSection.classList.add('js-hide');
  }
});
prjMenuCloseBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (!(prjMenuSection.classList.contains('js-hide'))) {
      prjMenuSection.classList.add('js-hide')
  }
});
contactsOpenBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (contactsSection.classList.contains('js-hide')) {
    contactsSection.classList.remove('js-hide')
    if (!(newsSection.classList.contains('js-hide'))) {
        newsSection.classList.add('js-hide')
    }
    if (!(mainMenuSection.classList.contains('js-hide'))) {
        mainMenuSection.classList.add('js-hide')
    }
    if (!(prjMenuSection.classList.contains('js-hide'))) {
        prjMenuSection.classList.add('js-hide')
    }
  }
  else {
    contactsSection.classList.add('js-hide');
  }
});
contactsCloseBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (!(contactsSection.classList.contains('js-hide'))) {
      contactsSection.classList.add('js-hide')
  }
});
