///
const postsCont = document.querySelector('.posts');

const handleDom = (data) => {
  postsCont.textContent = '';

  data.forEach((e) => {
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
    likeIcon.classList = 'fa-solid fa-thumbs-up';

    likeIcon.addEventListener('click', (event) => {
      event.target.style.color = 'blue';
      fetch(`/post/add-like/${e.id}`)
        .then((res) => res.json())
        .then((data) => {
          fetchFeed();
        });
    });

    img.src = e.img;
    name.textContent = e.name;
    txt.textContent = e.post;
    num.textContent = e.likes;

    postsCont.appendChild(post);
    user.append(img, name);
    like.append(num, likeIcon);
    post.append(user, txt, like);
  });
};

//
const fetchFeed = () => {
  fetch('/user/feed')
    .then((data) => data.json())
    .then((result) => handleDom(result));
};

fetchFeed();
