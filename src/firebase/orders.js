import {
  addDoc,
  collection,
  doc,
  getCountFromServer,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where
} from 'firebase/firestore';
import { db } from './config';

export async function createOrder(payload) {
  return addDoc(collection(db, 'orders'), {
    ...payload,
    createdAt: serverTimestamp(),
    status: 'new'
  });
}

export async function hasUserPlacedOrder(uid) {
  if (!uid) {
    return false;
  }

  const ordersQuery = query(collection(db, 'orders'), where('uid', '==', uid));
  const snapshot = await getCountFromServer(ordersQuery);
  return snapshot.data().count > 0;
}

export async function listOrders() {
  const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
}

export async function setOrderStatus(orderId, status) {
  return updateDoc(doc(db, 'orders', orderId), {
    status,
    updatedAt: serverTimestamp()
  });
}

export async function createDesignRequest(payload) {
  return addDoc(collection(db, 'designRequests'), {
    ...payload,
    createdAt: serverTimestamp(),
    status: 'new'
  });
}

export async function listDesignRequests() {
  const q = query(collection(db, 'designRequests'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
}

export async function setDesignRequestStatus(requestId, status) {
  return updateDoc(doc(db, 'designRequests', requestId), {
    status,
    updatedAt: serverTimestamp()
  });
}
