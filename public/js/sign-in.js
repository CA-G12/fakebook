const button = document.querySelector('.login');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const form = document.querySelector('.form');
button.addEventListener('click', (e) => {
  e.preventDefault();
    console.log(form.value);
  fetch('/user/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email: email.value, password: password.value }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message === 'successful') window.location.href = '/feed';
      else alert(data.message);
    });
});



