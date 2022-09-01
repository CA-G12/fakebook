/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */

const build = require('../server/database/config/build');

const conn = require('../server/database/config/connection');

const {

  deletePostQuery,
  signInQuery,
  signUpQuery,
  feedQuery,
  profileQuery,
} = require('../server/database/queries');

beforeEach(() => build());

afterAll(() => conn.end());

test('get user feed', () => {
  return feedQuery().then((data) => {
    expect(data.rows.length).toBe(2);
  });
});

test('get profile posts', () => {
  return profileQuery(1).then((data) => {
    expect(data.rows.length).toBe(2);
  });
});

test('get profile posts if id not exist', () => {
  return profileQuery(5).then((data) => {
    expect(data.rows.length).toBe(0);
  });
});

test('add new user', () => {
  const expected = ['test-user', 'test@gmail.net', 'testtest']
  return signUpQuery(expected).then((data) => {
    expect(data.name).toBe(expected.name);
    expect(data.email).toBe(expected.email);
  });
});

test('sign in by email if exist', () => {
  return signInQuery('testbdf@gmail.com').then((data) => {
    expect(data.rows.length).toBe(1);
  });
});

test('delete post', () => {
  return deletePostQuery(1).then(profileQuery(1)).then((data) => {
    expect(data.rows.length).toBe(0);
  });
});
