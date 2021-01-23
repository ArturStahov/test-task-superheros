export default function FetchGetAllItem(userId) {
  return fetch(
    `https://super-hero-factory-f0ab8-default-rtdb.firebaseio.com/heroItems${userId}.json`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    },
  ).then(response => response.json());
}
