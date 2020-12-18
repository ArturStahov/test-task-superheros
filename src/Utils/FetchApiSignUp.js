const API_KEY = 'AIzaSyD34TEphko4HXAfwRdCsllM5mkvC21Dxkc';

export default function FetchApiSignUp(email, password) {
  console.log(email, password);
  const options = {
    method: 'POST',
    body: JSON.stringify({ email, password, returnSecureToken: true }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    options,
  ).then(response => response.json());
}

//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDYPXUmlm-nmYpYSSmo_8aZyfAbuxI_HaA
