const formSet = document.querySelector('.js-form');
const inputEmail = formSet.elements.email;
const inputMessage = formSet.elements.message;
let saveData = { email: '', message: '' };

const parseData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (parseData !== null) {
  inputMessage.value = parseData.message;
  inputEmail.value = parseData.email;

  saveData = parseData;
}

formSet.addEventListener('input', event => {
  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  saveData.email = email.trim();
  saveData.message = message.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(saveData));
});

formSet.addEventListener('submit', evt => {
  evt.preventDefault();

  if (saveData.email.length == 0 || saveData.message.length == 0) {
    console.log(`please fill all field`);
  } else {
    console.log(saveData);
    localStorage.removeItem('feedback-form-state');
    formSet.reset();
    saveData.email = '';
    saveData.message = '';
  }
});