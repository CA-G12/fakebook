const { addLikeQuery, addPostQuery, deletePostQuery } = require('./posts');
const { signInQuery, signUpQuery } = require('./regist');
const { feedQuery, profileQuery } = require('./user');

module.exports = {
  addLikeQuery,
  addPostQuery,
  deletePostQuery,
  signInQuery,
  signUpQuery,
  feedQuery,
  profileQuery,
};
