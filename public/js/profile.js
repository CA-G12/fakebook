const deletePost = (e) =>{
  const { id } = e.target.parentElement;
  fetch(`/post/delete-post/${id}`)
    .then((res) => res.json())
    .then((data) => fetchProfile());
};

///
const postsCont = document.querySelector('.posts');
const username = document.querySelector('header .user h1');
const profilePic = document.querySelector('header .user img')

const handleDom = (data) => {
  postsCont.textContent = '';
  username.textContent = data.name;
  profilePic.src = data.img;

  data.posts.forEach((e) => {
    const post = document.createElement('div');
    const user = document.createElement('div');
    const like = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('h3');
    const txt = document.createElement('p');
    const closeIcon = document.createElement('i');
    const likeIcon = document.createElement('i');
    const num = document.createElement('span');

    post.classList = 'post';
    post.id = e.id;
    user.classList = 'user';
    like.classList = 'like';
    closeIcon.classList = 'fa-solid fa-xmark';
    likeIcon.classList = 'fa-solid fa-thumbs-up';

    closeIcon.addEventListener('click', deletePost);

    img.src = data.img;
    name.textContent = data.name;
    txt.textContent = e.post;
    num.textContent = e.likes;

    postsCont.appendChild(post);
    user.append(img, name);
    like.append(num, likeIcon);
    post.append(user, closeIcon, txt, like);
  });
};

const fetchProfile = () => {
  fetch('/user/profile')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.message === 'Unauthenticated') window.location.href = '/sign-up';
      else handleDom(data);
    });
};

fetchProfile();

/// adding a new post
const txtArea = document.querySelector('#form textarea');
const postBtn = document.querySelector('#form button');

postBtn.addEventListener('click', () => {
  const post = { post: txtArea.value };

  fetch('/post/add-post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((res) => {
      fetchProfile();
    });
});

/// log out

const logOut = document.querySelector('.fa-right-from-bracket');

logOut.addEventListener('click', () => {
  fetch('/user/sign-out')
    .then((res) => res.json())
    .then((data) => {
      if (data.message === 'redirect') window.location.href = '/';
    });
});
