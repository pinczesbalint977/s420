import { addDoc, collection, getDocs, orderBy, query, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db } from './config';

export async function createOrder(payload) {
  return addDoc(collection(db, 'orders'), {
    ...payload,
    createdAt: serverTimestamp(),
    status: 'new'
  });
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
