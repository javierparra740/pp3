/* importamos modulo firebase que nos permite conectarnos a la base de datos */
import firebase from 'firebase'

/* importamos metodos ref y onUnmounted que nos permiten referenciar y desmontar */
import { ref, onUnmounted } from 'vue'

/* configuracion de firebase */
const config = {
    apiKey: "AIzaSyBbkrpYLFc3UbCRxuLgYi2ZGTnlOXwvI0o",
    authDomain: "proyectovue-9878e.firebaseapp.com",
    databaseURL: "https://proyectovue-9878e-default-rtdb.firebaseio.com",
    projectId: "proyectovue-9878e",
    storageBucket: "proyectovue-9878e.appspot.com",
    messagingSenderId: "416722723967",
    appId: "1:416722723967:web:194b01024c1f3f530e0b4a"
};

/* inicializamos la aplicacion de firebase para poder acceder a todas sus funcionalidades */
const firebaseApp = firebase.initializeApp(config)

/* instancia de la base de datos firestore de firebase*/
const db = firebaseApp.firestore()

/* acceso a la coleccion de datos firebase*/
const cardsCollection = db.collection('cards')

/* funcion createCard que agrega una card dentro de la coleccion de datos cardsCollection */
export const createCard = card => {
    return cardsCollection.add(card)
}

/* funcion getCard que obtiene una card atraves del id*/
export const getCard = async id => {
    const card = await cardsCollection.doc(id).get()
    return card.exists ? card.data() : null
}

/* funcion updateCard que modifica una card con el id especificado */
export const updateCard = (id,card) => {
    return cardsCollection.doc(id).update(card)
}

/* funcion deleteCard que borra una card de la coleccion atraves del id */
export const deleteCard = id => {
    return cardsCollection.doc(id).delete()
}

/* funcion useLoadCards que devuelve todos los documentos dentro de la coleccion cards */
export const cargarCards = () => {
    const cards = ref([])
    const close = cardsCollection.onSnapshot(snapshot => {
        cards.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return cards 
}