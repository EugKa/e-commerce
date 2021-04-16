import { db } from "./firebase";

export function getList() {
  return db
    .collection("list")
    .get()
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return items;
    });
}

export function getItems() {
  return db
    .collection("items")
    .get()
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return items;
    });
}
export const createUserProfileDocument = async (userAuth?:any, additionlaData?:any) => {
  if(!userAuth) return;
  const userRef = db.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const craetedAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        craetedAt,
        ...additionlaData
      })
    } catch (error) {
      console.log(`error`, error.massage)
    }
  }

  return userRef;
} 


// export function getLists() {
//   return db
//     .collection("sneakers")
//     .where("list", "==", "")
//     .get()
//     .then((snapshot) => {
//       const items = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       return items;
//     });
// }

// export function getListItem(listId) {
//   return db
//     .collection("sneakers")
//     .where("list", "==", listId)
//     .get()
//     .then((snapshot) => {
//       const items = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       return items;
//     });
// }
