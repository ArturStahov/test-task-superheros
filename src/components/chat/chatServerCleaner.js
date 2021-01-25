

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.deleteOldItems = functions.database
  .ref('/events/{eventId}')
  .onWrite(change => {
    const ref = change.after.ref.parent; // reference to the parent
    const now = Date.now();
    const oldItemsQuery = ref.orderByChild('MyTimestamp').endAt(now);

    return oldItemsQuery.once('value').then(snapshot => {
      // create a map with all children that need to be removed
      const updates = {};
      snapshot.forEach(child => {
        updates[child.key] = null;
      });
      return ref.update(updates);
      // execute all updates in one go and return the result to end the function
    });
  });
