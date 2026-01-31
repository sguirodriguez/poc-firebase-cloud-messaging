import firebaseAdmin from 'firebase-admin'
const serviceAccount = require('../credentials/firebase.json')

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
})

export default firebaseAdmin