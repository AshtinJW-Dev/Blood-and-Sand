import { Router } from 'express';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase.mjs';

const router = Router();

router.post('/fight', async (req, res) => {
  const { gladiator1Id, gladiator2Id } = req.body;

  try {
    const gladiator1Ref = doc(db, 'gladiators', gladiator1Id);
    const gladiator2Ref = doc(db, 'gladiators', gladiator2Id);

    const [gladiator1Doc, gladiator2Doc] = await Promise.all([
      getDoc(gladiator1Ref),
      getDoc(gladiator2Ref)
    ]);

    if (!gladiator1Doc.exists() || !gladiator2Doc.exists()) {
      return res.status(404).json({ message: 'One or both gladiators not found' });
    }

    const gladiator1 = { id: gladiator1Doc.id, ...gladiator1Doc.data() };
    const gladiator2 = { id: gladiator2Doc.id, ...gladiator2Doc.data() };

    // Simple battle logic: compare attack and defense stats
    const gladiator1Power = gladiator1.attack + gladiator1.defense + gladiator1.speed;
    const gladiator2Power = gladiator2.attack + gladiator2.defense + gladiator2.speed;

    let winner, loser;
    if (gladiator1Power > gladiator2Power) {
      winner = gladiator1;
      loser = gladiator2;
    } else {
      winner = gladiator2;
      loser = gladiator1;
    }

    // Update winner and loser stats
    winner.experience += 20;
    winner.stamina -= 10;
    loser.stamina -= 10;

    await Promise.all([
      updateDoc(gladiator1Ref, gladiator1.id === winner.id ? winner : loser),
      updateDoc(gladiator2Ref, gladiator2.id === winner.id ? winner : loser)
    ]);

    res.json({ winner: winner.id, loser: loser.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
