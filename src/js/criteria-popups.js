var crtBasicPopup = document.querySelector('.js-crt-basic-popup');
    crtBasicOpen  = document.querySelector('.js-crt-basic-open');
    crtBasicClose = document.querySelector('.js-crt-basic-close');

    crtAdvancedPopup = document.querySelector('.js-crt-advanced-popup');
    crtAdvancedOpen  = document.querySelector('.js-crt-advanced-open');
    crtAdvancedClose = document.querySelector('.js-crt-advanced-close');

crtBasicOpen.addEventListener('click', function(event) {
  if (crtBasicPopup.classList.contains('js-hide')) {
    crtBasicPopup.classList.remove('js-hide')
  }
});
crtBasicClose.addEventListener('click', function(event) {
  event.preventDefault();
  if (!(crtBasicPopup.classList.contains('js-hide'))) {
    crtBasicPopup.classList.add('js-hide')
  }
});

crtAdvancedOpen.addEventListener('click', function(event) {
  if (crtAdvancedPopup.classList.contains('js-hide')) {
    crtAdvancedPopup.classList.remove('js-hide')
  }
});
crtAdvancedClose.addEventListener('click', function(event) {
  event.preventDefault();
  if (!(crtAdvancedPopup.classList.contains('js-hide'))) {
    crtAdvancedPopup.classList.add('js-hide')
  }
});
