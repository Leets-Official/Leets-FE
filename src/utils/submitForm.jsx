import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase-config';

export default info => {
  const date = [new Date().getMonth() + 1, new Date().getDate()];
  // console.log(info.email);
  setDoc(doc(firestore, 'LEETS', info.email), { ...info, date: date.join('/') });
};
