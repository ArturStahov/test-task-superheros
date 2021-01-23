export default function FetchAddDeleteItems(userID, itemsArr) {
  if (!userID) return;
  return fetch(
    `https://super-hero-factory-f0ab8-default-rtdb.firebaseio.com/heroItems${userID}.json`,
    {
      method: 'PUT',
      body: JSON.stringify(itemsArr),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    },
  ).then(response => response.json());
}
