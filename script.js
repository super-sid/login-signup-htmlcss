const passwordInputs = document.querySelectorAll('.c-form__input[type="password"]');
const showHides = document.querySelectorAll('.c-form__input-show');

for (let i = 0; i < showHides.length; i++) {
  showHides[i].addEventListener('click', function () {
    if (passwordInputs[i].getAttribute('type') === 'password') {
      passwordInputs[i].setAttribute('type', 'text');
      showHides[i].innerHTML = 'Hide';
    } else {
      passwordInputs[i].setAttribute('type', 'password');
      showHides[i].innerHTML = 'Show';
    }
  });
}

const loginContainer = document.querySelector('.c-form__wrapper--login');
const signupContainer = document.querySelector('.c-form__wrapper--signup');

loginContainer.addEventListener('click', function () {
  if (document.body.classList.contains('signup_active')) {
    document.body.classList.remove('signup_active');
  }
});
signupContainer.addEventListener('click', function () {
  if (!document.body.classList.contains('signup_active')) {
    document.body.classList.add('signup_active');
  }
});