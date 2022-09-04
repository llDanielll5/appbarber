import app from "./base";
import {
  addDoc,
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const db = getFirestore(app);
export const addNewDoc = async (col: any, data: any) => {
  await addDoc(collection(db, col), data);
};

export const addNewUser = async (data: any, uid: any) => {
  await setDoc(doc(db, "users", uid), data);
};

export const updateUserInfos = async (data: any, username: string) => {
  await updateDoc(doc(db, "users", username), data);
};

export const userExists = async (username: string) => {
  const docRef = doc(db, "users", username);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return true;
  } else {
    return false;
  }
};

export const getUserInfos = async (uid: string) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};
