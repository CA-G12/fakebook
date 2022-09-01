const form = document.querySelector('div');
const signUpBtn = document.querySelector('div button');
const msg = document.querySelector('div p');

const validation = (email, password, repeat_password) => {
  const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
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
  const name = form.children[1].value;
  const email = form.children[2].value;
  const password = form.children[3].value;
  const repeat_password = form.children[4].value;

  const data = { name, email, password, repeat_password };

  const result = validation(email, password, repeat_password);
  if (result !== true) {
    msg.style.display = 'block';
    msg.textContent = result;
  } else {
    fetchSignUp(data)
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData.state === 'success') window.location.href = '/feed';
        else {
          msg.style.display = 'block';
          msg.textContent = responseData.message;
        }
      });
  }
});
