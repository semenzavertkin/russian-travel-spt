// Слайдер
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({ responsive:{ //Адаптация в зависимости от разрешения экрана
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
  });
});



// Открытие попапа
const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc)
  window.addEventListener('click', closeByOverlay)
}

// Закртыие попапа
const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
  document.addEventListener('keydown', closeByEsc)
  window.addEventListener('click', closeByOverlay)
}

// Закрытие попапа нажатием Esc
const closeByEsc = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Закрытие попапа кликом на оверлей
const closeByOverlay = (evt) => {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target == openedPopup) {
    closePopup(openedPopup);
  }
}

// Поап аутинификации
const popupAuthorization = document.querySelector('.popup_authorization');
const popupAuthorizationOpenButton = document.querySelector('.header__btn');
const popupAuthorizationCloseButton = popupAuthorization.querySelector('.popup__close');

popupAuthorizationOpenButton.addEventListener('click', () => {
  openPopup(popupAuthorization);
})
popupAuthorizationCloseButton.addEventListener('click', () => {
  closePopup(popupAuthorization);
})

// Попап регистрации

const popupRegistr = document.querySelector('.popup_registr');
const popupRegistrOpenButton = document.querySelector('.popup__text_btn');
const popupRegistrCloseButton = popupRegistr.querySelector('.popup__close');

popupRegistrOpenButton.addEventListener('click', () => {
  closePopup(popupAuthorization);
  openPopup(popupRegistr);
})
popupRegistrCloseButton.addEventListener('click', () => {
  closePopup(popupRegistr);
})