const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('[name = email]');
const textarea = document.querySelector('[name = message]');
input.setAttribute('required', '');
textarea.setAttribute('required', '');

const form = {
  email: '',
  message: '',
};
const getForm = JSON.parse(localStorage.getItem('feedback-form-state'));
if (getForm !== null) {
  form.email = getForm.email;
  form.message = getForm.message;
}
input.value = form.email;
textarea.value = form.message;
feedbackForm.addEventListener(
  'input',
  throttle(evt => {
    if (evt.target.name === 'email') {
      form.email = evt.target.value;
    } else if (evt.target.name === 'message') {
      form.message = evt.target.value;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(form));
  }, 500)
);
feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(form);
  localStorage.removeItem('feedback-form-state');
  form.email = '';
  form.message = '';
});
