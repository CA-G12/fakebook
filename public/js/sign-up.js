const form = document.querySelector('form');
const signUpBtn = document.querySelector('form button');
const msg = document.querySelector('form p');

const validation = (email, password, repeat_password) => {
  const emailPattern = /^[a-zA-Z]+@gmail.com$/;
  const passwordPattern = /[A-Za-z0-9]/gi;
  if (!emailPattern.test(email)) return 'invalid email';
  if (!passwordPattern.test(password) || password.length < 5) return 'your password must be at least 5 characters';
  if (password !== repeat_password) return 'passwords don\'t match';
  return true;
};

const fetchSignUp = (data) => fetch('/user/sign-up', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = form.children[0].value;
  const email = form.children[1].value;
  const password = form.children[2].value;
  const repeat_password = form.children[3].value;

  const data = { name, email, password, repeat_password };

  const result = validation(email, password, repeat_password);
  if (result !== true) msg.textContent = result;
  else {
    fetchSignUp(data)
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData.state === 'success') window.location.href = '/feed';
        else msg.textContent = responseData.message;
      });
  }
});
