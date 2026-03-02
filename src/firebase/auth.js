import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from './config';

export function listenAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function registerWithEmail(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(
    doc(db, 'users', userCredential.user.uid),
    {
      email,
      role: 'user',
      createdAt: serverTimestamp()
    },
    { merge: true }
  );
  return userCredential.user;
}

export async function loginWithEmail(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

export function logout() {
  return signOut(auth);
}

export async function getUserProfile(uid) {
  const snapshot = await getDoc(doc(db, 'users', uid));
  if (!snapshot.exists()) {
    return { role: 'user' };
  }
  return snapshot.data();
}
