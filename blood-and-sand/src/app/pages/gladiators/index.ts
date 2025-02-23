import { NextApiRequest, NextApiResponse } from '../../../../frontend/node_modules/next';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const querySnapshot = await getDocs(collection(db, 'gladiators'));
      const gladiatorsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(gladiatorsData);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch gladiators', err });
    }
  } else if (req.method === 'PUT') {
    const { id, data } = req.body;
    try {
      const gladiatorRef = doc(db, 'gladiators', id);
      await updateDoc(gladiatorRef, data);
      res.status(200).json({ message: 'Gladiator updated successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to update gladiator', err });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
  
};

export default handler;
