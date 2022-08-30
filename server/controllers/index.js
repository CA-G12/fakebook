const { addLike, addPost, deletePost } = require('./posts');
const { signIn, signOut, signUp } = require('./regist');
const { feed, profile } = require('./user');

module.exports = {
  addLike,
  addPost,
  deletePost,
  signIn,
  signOut,
  signUp,
  feed,
  profile,
};
