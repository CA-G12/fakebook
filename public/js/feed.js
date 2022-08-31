const fetchFeed = () => {
  fetch('/user/feed')
    .then((data) => data.json())
    .then((result) => console.log(result));
};

fetchFeed();
