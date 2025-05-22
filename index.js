const burgerMenu = document.querySelector('.burger-menu');
const btnBurgerMenu = document.querySelector('.header-main-bnt__burger');
const closeBurgerMenu = document.querySelector('.burger-menu__close');

const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const submitBtn = document.getElementById('submitForm');

const countrySelect = document.getElementById("country");
const codeInput = document.getElementById("code");

  const countryCodes = {
    US: "+1",
    UK: "+44",
    IN: "+91"
  };

const isShowMenu = () => {
  burgerMenu.style.display = burgerMenu.style.display === 'none' ? 'block' : 'none';
};

const validateEmail = (email) => {
   const regex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;
   return regex.test(email);
}

btnBurgerMenu.addEventListener('click', isShowMenu);
closeBurgerMenu.addEventListener('click', isShowMenu);

emailInput.addEventListener('input', () => {
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    emailError.style.display = 'none';
    submitBtn.disabled = false;
  } else {
    emailError.style.display = 'inline';
    submitBtn.disabled = true;
  }
});

countrySelect.addEventListener("change", () => {
  const selectedCountry = countrySelect.value;
  const countryCode = countryCodes[selectedCountry] || "";
  codeInput.value = countryCode;
});
