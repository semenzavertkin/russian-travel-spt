const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_inactive',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_active'
};

const hiddenError = (options, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(options.inputErrorClass);
    errorElement.classList.remove(options.errorClass);
    errorElement.textContent = '';
};

const showError = (options, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(options.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(options.errorClass);
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const setInputState = (options, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showError(options, formElement, inputElement, inputElement.validationMessage);
    } else {
        hiddenError(options, formElement, inputElement);
    }
};

const toggleButtonState = (options, inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(options.inactiveButtonClass);
    } else {
        buttonElement.removeAttribute("disabled");
        buttonElement.classList.remove(options.inactiveButtonClass);
    }
};

const setEventListeners = (options, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
    const buttonElement = formElement.querySelector(options.submitButtonSelector);
    toggleButtonState(options, inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            setInputState(options, formElement, inputElement);
            toggleButtonState(options, inputList, buttonElement);
        });
    });
};

const enableValidation = (options) => {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(options, formElement);
    });
};

enableValidation(options);
