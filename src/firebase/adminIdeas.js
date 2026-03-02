import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore';
import { db } from './config';

export async function createAdminIdea(payload) {
  return addDoc(collection(db, 'adminIdeas'), {
    ...payload,
    comments: [],
    completionReport: null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

export async function listAdminIdeas() {
  const q = query(collection(db, 'adminIdeas'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
}

export async function getAdminIdeaById(ideaId) {
  const snapshot = await getDoc(doc(db, 'adminIdeas', ideaId));
  if (!snapshot.exists()) {
    return null;
  }
  return { id: snapshot.id, ...snapshot.data() };
}

export async function addAdminIdeaComment(ideaId, comment, existingComments = []) {
  return updateDoc(doc(db, 'adminIdeas', ideaId), {
    comments: [
      ...existingComments,
      {
        ...comment,
        createdAt: new Date().toISOString()
      }
    ],
    updatedAt: serverTimestamp()
  });
}

export async function updateAdminIdea(ideaId, payload) {
  return updateDoc(doc(db, 'adminIdeas', ideaId), {
    ...payload,
    updatedAt: serverTimestamp()
  });
}
