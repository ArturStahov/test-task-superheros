const API_KEY = 'AIzaSyD34TEphko4HXAfwRdCsllM5mkvC21Dxkc';

export default function FetchApiAutchs(email, password) {
  const options = {
    method: 'POST',
    body: JSON.stringify({ email, password, returnSecureToken: true }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    options,
  ).then(response => {
    if (!response.ok) {
      throw 'The username or password you entered is incorrect. Try again!';
    }
    return response.json();
  });
}
