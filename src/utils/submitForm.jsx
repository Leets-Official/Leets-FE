import { doc, setDoc } from 'firebase/firestore';
import db from '../firebase-config';

export default info => {
  const date = [new Date().getMonth() + 1, new Date().getDate()];
  setDoc(doc(db, 'LEETS', `${info.name}$${info.SID}`), { ...info, date: date.join('/') });
};