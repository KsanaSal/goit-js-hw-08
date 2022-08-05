const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector("[name = email]");
input.value = "fgh"
const getForm = JSON.parse(localStorage.getItem('feedback-form-state'));
console.log(getForm);
const form = {
  email: '',
  message: '',
};
feedbackForm.addEventListener(
  'input',
  throttle(evt => {
    if (evt.target.name === 'email') {
      form.email = evt.target.value;
    } else if (evt.target.name === 'message') {
      form.message = evt.target.value;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(form));
    console.log(form);
    console.log(evt.target.name);
    console.dir(evt.target);
    console.dir(evt.currentTarget);
  }, 500)
);
console.log('feedbackForm');

feedbackForm.children[0].value = "hjh";