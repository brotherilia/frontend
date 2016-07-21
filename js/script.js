var newsSection  = document.querySelector('.js-news'),
    newsOpenBtn  = document.querySelector('.js-news-open'),
    newsCloseBtn = document.querySelector('.js-news-close'),
    contactsSection  = document.querySelector('.js-contacts'),
    contactsOpenBtn  = document.querySelector('.js-contacts-open'),
    contactsCloseBtn = document.querySelector('.js-contacts-close');
newsOpenBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (newsSection.classList.contains('js-hide')) {
    newsSection.classList.remove('js-hide')
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
contactsOpenBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (contactsSection.classList.contains('js-hide')) {
    contactsSection.classList.remove('js-hide')
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
