const form = document.getElementById('form');
const btn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.getElementById('successModal');
const card = document.querySelector('.card');

function validateEmail(email) {
    if (!email) return 'O e-mail é obrigatório';

    const isValidEmail = /^\S+@\S+\.\S+$/;
    if (!isValidEmail.test(email)) {
        return 'Por favor, insira um e-mail válido';
    }

    return '';
}

function submitForm(e) {
    e.preventDefault();

    const formDataEntries = new FormData(form).entries();
    const { email } = Object.fromEntries(formDataEntries);

    const emailErrorMessage = validateEmail(email);

    const emailErrorMessageElement = form.querySelector('.message_erro');


    if (emailErrorMessage) {
        emailErrorMessageElement.innerText = emailErrorMessage;
        form.querySelector('#email').style.border = '2px solid hsl(4, 100%, 67%)';
        return;
    } else {
        form.querySelector('#email').style.border = '1px solid hsl(0, 0%, 58%)';
        emailErrorMessageElement.innerText = '';
    }
    if (!emailErrorMessage) {

      modal.style.display = 'block';
      card.classList.add('hidden');
      form.reset();
    }
}

form.addEventListener('submit', submitForm);

function closeModal() {
    modal.style.display = 'none';
    card.classList.remove('hidden');
}

closeBtn.addEventListener('click', closeModal);