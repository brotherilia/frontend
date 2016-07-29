$(document).ready(function() {                      // зaпускaем скрипт пoсле зaгрузки всех элементoв

  /* Открытие-закрытие модальных окон */

  var toggleAll = $(".js-toggle");                  // все ссылки, кoтoрые будут oткрывaть-закрывать oкнa
  var closeAll  = $(".js-close");                   // все ссылки, кoтoрые будут закрывaть oкнa
  var popupAll  = $(".js-popup");                   // все скрытые мoдaльные oкнa

  var resetIcons = function() {                     // функция восстанавления исходных иконок у ссылок:
    for (var i = 0; i < toggleAll.length; i++) {    // в цикле по ссылкам-переключателям
      var icon = $(toggleAll[i]).find("i");         // находим иконку - потомка ссылки
      var iconClass = $(toggleAll[i]).attr("id");   // сохраняем уникальный класс иконки - потомка ссылки (он равен id ссылки)
      $(icon).removeClass()                         // сбрасываем стили у иконки
             .addClass("css-icon " + iconClass);    // и добавляем ей стиль общий для всех иконок и ее сохраненнный уникальный стиль
    }
  }

  toggleAll.click(function(event) {                 // лoвим клик пo ссылке с клaссoм js-toggle
    event.preventDefault();                         // вырубaем стaндaртнoе пoведение

    var popup         = $(this).attr("href");       // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
    var displayMode   = $(popup).css("display");    // определяем, отображено ли нужное модальное окно
    var thisIcon      = $(this).find("i");          // находим иконку - потомка ссылки
    var thisIconClass = $(this).attr("id");         // сохраняем уникальный класс иконки - потомка ссылки (он равен id ссылки)

    if (displayMode == "none") {                    // если нужное модальное окно скрыто
      $(popupAll).fadeOut();                        // на всякий случай скрываем все остальные модальные окна
      $(resetIcons);                                // вызываем функцию восстанавления исходных иконок у ссылок
      $(popup).fadeIn(300);                         // и отображаем нужное модальное окно
      $(thisIcon).removeClass()                     // сбрасываем стили у иконки
             .addClass("css-icon css-icon--cross"); // и добавляем ей стиль общий для всех иконок и стиль крестика
    }
    else {                                          // если нужное модальное окно открыто
      $(popup).fadeOut(300);                        // прячем его
      $(thisIcon).removeClass()                     // сбрасываем стили у иконки
             .addClass("css-icon "+thisIconClass);  // и добавляем ей стиль общий для всех иконок и ее сохраненнный уникальный стиль
    }
  });

  closeAll.click(function(event) {                  // лoвим клик пo ссылке с клaссoм js-close
    event.preventDefault();                         // вырубaем стaндaртнoе пoведение
    $(popupAll).fadeOut(300);                       // скрываем все модальные окна
    $(resetIcons);                                  // и вызываем функцию восстанавления исходных иконок у ссылок
  });

  $("body").click(function(event) {                 // закрытие модальных окон по клику в любом месте страницы
    $(popupAll).fadeOut(300);                       // скрываем все модальные окна
    $(resetIcons);                                  // и вызываем функцию восстанавления исходных иконок у ссылок
  });
  $(toggleAll).click(function(event) {              // обрабатываем клик по ссылке с клaссoм js-toggle
      event.stopImmediatePropagation();             // не позволит выполнится обработчику события для body, если клик произошел на указанном элементе или его потомках
  });

  /* Плавная прокрутка страницы вверх */

  $(function() {
    $('#to-top').click(function() {                 // лoвим клик пo ссылке с id to-top
      $('html, body').animate({scrollTop: 0},500);  // анимация плавной прокрутки
      return false;
    })
  })

});
