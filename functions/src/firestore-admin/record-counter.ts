/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import admin from 'firebase-admin'
import { collectionName } from '../services/mangarel/constants'

// eslint-disable-next-line import/prefer-default-export
export const addCounter = async (
  db: admin.firestore.Firestore,
  collName: string,
  count = 1,
) => {
  const doc = db.collection(collectionName.docCounters).doc(collName)
  await doc.set(
    {
      count: admin.firestore.FieldValue.increment(count),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    { merge: true },
  )
}
