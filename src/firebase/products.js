import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  startAfter,
  where
} from 'firebase/firestore';
import { db } from './config';

const productsRef = collection(db, 'products');

export async function listProducts() {
  const q = query(productsRef, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
}

export async function countProducts({ minPrice, maxPrice } = {}) {
  const constraints = [];

  if (Number.isFinite(minPrice)) {
    constraints.push(where('price', '>=', minPrice));
  }

  if (Number.isFinite(maxPrice)) {
    constraints.push(where('price', '<=', maxPrice));
  }

  const q = query(productsRef, ...constraints);
  const snapshot = await getCountFromServer(q);
  return snapshot.data().count;
}

export async function listProductsPage({
  pageSize = 20,
  afterDoc = null,
  minPrice,
  maxPrice,
  sortDirection = 'asc'
} = {}) {
  const constraints = [];

  if (Number.isFinite(minPrice)) {
    constraints.push(where('price', '>=', minPrice));
  }

  if (Number.isFinite(maxPrice)) {
    constraints.push(where('price', '<=', maxPrice));
  }

  constraints.push(orderBy('price', sortDirection === 'desc' ? 'desc' : 'asc'));

  if (afterDoc) {
    constraints.push(startAfter(afterDoc));
  }

  constraints.push(limit(pageSize));

  const q = query(productsRef, ...constraints);
  const snapshot = await getDocs(q);
  const items = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
  const lastDoc = snapshot.docs.length > 0 ? snapshot.docs[snapshot.docs.length - 1] : null;

  return { items, lastDoc };
}

export async function getProductById(id) {
  const snapshot = await getDoc(doc(db, 'products', id));
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
}

export async function createProduct(payload) {
  return addDoc(productsRef, {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

export async function removeProduct(id) {
  return deleteDoc(doc(db, 'products', id));
}
