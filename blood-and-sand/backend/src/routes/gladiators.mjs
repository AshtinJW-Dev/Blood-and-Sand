import { Router } from 'express';
import { collection, getDocs, doc, updateDoc, getDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase.mjs';

const router = Router();

router.get('/', async (req, res) => {
  try {
    console.log('Fetching gladiators...');
    const gladiatorsCollection = collection(db, 'gladiators');
    console.log('Gladiators Collection Reference:', gladiatorsCollection); // Log the collection reference
    const querySnapshot = await getDocs(gladiatorsCollection);
    console.log('Query Snapshot:', querySnapshot); // Log the query snapshot
    const gladiatorsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log('Fetched gladiators:', gladiatorsData); // Log fetched data
    res.status(200).json(gladiatorsData);
  } catch (err) {
    console.error('Error fetching gladiators:', err);
    res.status(500).json({ error: 'Failed to fetch gladiators', err });
  }
});

router.post('/', async (req, res) => {
  const newGladiator = req.body;
  try {
    console.log('Creating new gladiator:', newGladiator);
    const gladiatorsCollection = collection(db, 'gladiators');
    const docRef = await addDoc(gladiatorsCollection, newGladiator);
    console.log('Gladiator created with ID:', docRef.id);
    res.status(201).json({ id: docRef.id });
  } catch (err) {
    console.error('Error creating gladiator:', err);
    res.status(500).json({ error: 'Failed to create gladiator', err });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    console.log(`Updating gladiator with id: ${id}`);
    console.log('Data:', data); // Log the data being sent
    const gladiatorRef = doc(db, 'gladiators', id);
    console.log('Gladiator Reference:', gladiatorRef); // Log the document reference
    await updateDoc(gladiatorRef, data);
    console.log('Update Response:', { id, data }); // Log the response
    res.status(200).json({ message: 'Gladiator updated successfully' });
  } catch (err) {
    console.error('Error updating gladiator:', err);
    res.status(500).json({ error: 'Failed to update gladiator', err });
  }
});

router.put('/train/:id', async (req, res) => {
  const { id } = req.params;
  const { skill } = req.body;
  try {
    const gladiatorRef = doc(db, 'gladiators', id);
    const gladiatorDoc = await getDoc(gladiatorRef);
    if (!gladiatorDoc.exists()) {
      return res.status(404).json({ message: 'Gladiator not found' });
    }
    const gladiator = gladiatorDoc.data();

    if (gladiator.stamina < 5) {
      return res.status(400).json({ message: 'Not enough stamina to train' });
    }

    if (skill === 'attack') {
      gladiator.attack += 5;
    } else if (skill === 'defense') {
      gladiator.defense += 5;
    } else if (skill === 'speed') {
      gladiator.speed += 5;
    }

    gladiator.level += 1;
    gladiator.stamina -= 5;
    gladiator.experience += 10;

    await updateDoc(gladiatorRef, gladiator);
    res.json(gladiator);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/heal/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const gladiatorRef = doc(db, 'gladiators', id);
    const gladiatorDoc = await getDoc(gladiatorRef);
    if (!gladiatorDoc.exists()) {
      return res.status(404).json({ message: 'Gladiator not found' });
    }
    const gladiator = gladiatorDoc.data();

    if (gladiator.stamina < 5) {
      return res.status(400).json({ message: 'Not enough stamina to heal' });
    }

    gladiator.health = 100; // Reset health to 100
    gladiator.stamina -= 5;

    await updateDoc(gladiatorRef, gladiator);
    res.json(gladiator);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const gladiatorRef = doc(db, 'gladiators', id);
    await deleteDoc(gladiatorRef);
    res.status(200).json({ message: 'Gladiator deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
