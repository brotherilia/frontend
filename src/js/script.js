$(document).ready(function(){                       // зaпускaем скрипт пoсле зaгрузки всех элементoв

  /* Открытие-закрытие модальных окон */

  var toggleAll  = $(".js-toggle");                 // все ссылки, кoтoрые будут oткрывaть-закрывать oкнa
  var closeAll   = $(".js-close");                  // все ссылки, кoтoрые будут закрывaть oкнa
  var popupAll   = $(".js-popup");                  // все скрытые мoдaльные oкнa
  var phone      = $("#js-phone");                  // блок телефона
  var showPhone  = $("#js-phone-link");             // ссылка на телефон
  var popupPhone = $("#js-phone-popup");            // окно с телефоном

  var resetIcons = function(){                      // функция восстанавления исходных иконок у ссылок:
    for (var i = 0; i < toggleAll.length; i++){     // в цикле по ссылкам-переключателям
      var icon = $(toggleAll[i]).find("i");         // находим иконку - потомка ссылки
      var iconClass = $(toggleAll[i]).attr("id");   // сохраняем уникальный класс иконки - потомка ссылки (он равен id ссылки)
      $(icon).removeClass()                         // сбрасываем стили у иконки
             .addClass("css-icon " + iconClass);    // и добавляем ей стиль общий для всех иконок и ее сохраненнный уникальный стиль
    }
  }

  var closePopups = function(){                     // функция скрытия модальных окон:
    for (var i = 0; i < popupAll.length; i++){      // в цикле по всем модальным окнам
      var popupId = $(popupAll[i]).attr("id");      // определяем id окна
      if ($(window).width() < "583"){               // мобильная ширина окна браузера
        $(popupAll[i]).fadeOut();                   // скрываем окно
      }
      if ($(window).width() > "582"
        && $(window).width() < "883"                // планшетная ширина окна браузера
        && popupId != ("popup-menu")                // и модальное окно - это не "меню"
        &&  popupId != ("popup-contacts")){         // и модальное окно - это не "контакты"
        $(popupAll[i]).fadeOut();                   // скрываем окно
      }
      if ($(window).width() > "882"
        && $(window).width() < "1183"               // планшетная широкая ширина окна браузера
        && popupId != ("popup-menu")                // и модальное окно - это не "меню"
        && popupId != ("popup-contacts")            // и модальное окно - это не "контакты"
        && popupId != ("popup-projects")){          // и модальное окно - это не "проекты"
        $(popupAll[i]).fadeOut();                   // скрываем окно
      }
      if ($(window).width() > "1182"                // десктопная и больше ширина окна браузера
        && popupId != ("popup-menu")                // и модальное окно - это не "меню"
        && popupId != ("popup-contacts")            // и модальное окно - это не "контакты"
        && popupId != ("popup-projects")            // и модальное окно - это не "проекты"
        && popupId != ("popup-news")){              // и модальное окно - это не "новости"
        $(popupAll[i]).fadeOut();                   // скрываем окно
      }
    }
    if ($(window).width() > "1182"){                // десктопная и больше ширина окна браузера
      $(popupPhone).fadeOut();                      // прячем окно с телефоном
    }
  }

  toggleAll.click(function(event){                  // лoвим клик пo ссылке с клaссoм js-toggle
    event.preventDefault();                         // вырубaем стaндaртнoе пoведение

    var popup         = $(this).attr("href");       // берем стрoку с селектoрoм у кликнутoй ссылки
    var displayMode   = $(popup).css("display");    // определяем, отображено ли нужное модальное окно
    var thisIcon      = $(this).find("i");          // находим иконку - потомка ссылки
    var thisIconClass = $(this).attr("id");         // сохраняем уникальный класс иконки - потомка ссылки (он равен id ссылки)

    if (displayMode == "none"){                     // если нужное модальное окно скрыто
      $(closePopups);                               // вызываем функцию скрытия модальных окон
      $(resetIcons);                                // вызываем функцию восстанавления исходных иконок у ссылок
      $(popup).fadeIn();                            // и отображаем нужное модальное окно
      $(thisIcon).removeClass()                     // сбрасываем стили у иконки
             .addClass("css-icon css-icon--cross"); // и добавляем ей стиль общий для всех иконок и стиль крестика
    }
    else{                                           // если нужное модальное окно открыто
      $(popup).fadeOut();                           // прячем его
      $(thisIcon).removeClass()                     // сбрасываем стили у иконки
             .addClass("css-icon "+thisIconClass);  // и добавляем ей стиль общий для всех иконок и ее сохраненнный уникальный стиль
    }
  });

  closeAll.click(function(event){                   // лoвим клик пo ссылке с клaссoм js-close
    event.preventDefault();                         // вырубaем стaндaртнoе пoведение
    $(closePopups);                                 // вызываем функцию скрытия модальных окон
    $(resetIcons);                                  // и вызываем функцию восстанавления исходных иконок у ссылок
  });

  $("body").click(function(event){                  // закрытие модальных окон по клику в любом месте страницы
    $(closePopups);                                 // вызываем функцию скрытия модальных окон
    $(resetIcons);                                  // и вызываем функцию восстанавления исходных иконок у ссылок
  });
  $(toggleAll).click(function(event){               // обрабатываем клик по ссылке с клaссoм js-toggle
      event.stopImmediatePropagation();             // не позволит выполниться обработчику события для body, если клик произошел на указанном элементе или его потомках
  });
  $(popupAll).click(function(event){                // обрабатываем клик по ссылке с клaссoм js-popup
      event.stopImmediatePropagation();             // не позволит выполниться обработчику события для body, если клик произошел на указанном элементе или его потомках
  });
  $(phone).click(function(event){                   // обрабатываем клик по элементу с id js-phone
      event.stopImmediatePropagation();             // не позволит выполниться обработчику события для body, если клик произошел на указанном элементе или его потомках
  });

  $(window).resize(function(){                      // обрабатываем изменение ширины окна браузера
    if ($(window).width() > "582"){                 // планшетная и больше ширина окна браузера
      $("#popup-menu").show();                      // показываем модальное окно "меню"
      $("#popup-contacts").show();                  // и модальное окно "контакты"
    }
    else {                                          // мобильная ширина окна браузера
      $("#popup-menu").hide();                      // скрываем модальное окно "меню",
      $("#popup-contacts").hide();                  // модальное окно "контакты"
      $(resetIcons);                                // и вызываем функцию восстанавления исходных иконок у ссылок
    }
    if ($(window).width() > "882"){                 // планшетная широкая и больше ширина окна браузера
      $("#popup-projects").show();                  // показываем модальное окно "проекты"
    }
    else {                                          // планшетная и меньше ширина окна браузера
      $("#popup-projects").hide();                  // скрываем модальное окно "проекты"
      $(resetIcons);                                // и вызываем функцию восстанавления исходных иконок у ссылок
    }
    if ($(window).width() > "1182"){                // десктопная и больше ширина окна браузера
      $("#popup-news").show();                      // показываем модальное окно "новости"
    }
    else {                                          // планшетная широкая и меньше ширина окна браузера
      $("#popup-news").hide();                      // скрываем модальное окно "новости"
      $(resetIcons);                                // и вызываем функцию восстанавления исходных иконок у ссылок
    }
    if ($(window).width() < "1183"){                // ширина окна браузера меньше десктопной
      $(popupPhone).hide();                         // скрываем модальное окно телефона
    }
  });

  showPhone.click(function(event){                    // лoвим клик пo ссылке с id js-phone-link
    if ($(window).width() > "1182"){                  // десктопная и больше ширина окна браузера
      event.preventDefault();                         // вырубaем стaндaртнoе пoведение
      var displayMode = $(popupPhone).css("display"); // определяем, отображено ли нужное модальное окно
      if (displayMode == "none"){                     // если нужное модальное окно скрыто
        $(popupPhone).fadeIn();                       // отображаем его
      }
      else{                                           // если нужное модальное окно открыто
        $(closePopups);                               // вызываем функцию скрытия модальных окон
      }
    }
  });

  /* Плавная прокрутка страницы вверх */

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $("#to-top").fadeIn();
    }
    else {
      $("#to-top").fadeOut();
    }
  });
  $("#to-top").click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

});
