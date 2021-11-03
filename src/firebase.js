/* importamos modulo firebase que nos permite conectarnos a la base de datos */
import firebase from 'firebase'


/* configuracion de firebase */
const config = {
    apiKey: "AIzaSyD25vz1OB869SZgBYx0f70BeWIofYnLgog",
    authDomain: "proyecto-vue-firebase.firebaseapp.com",
    databaseURL: "https://proyecto-vue-firebase-default-rtdb.firebaseio.com",
    projectId: "proyecto-vue-firebase",
    storageBucket: "proyecto-vue-firebase.appspot.com",
    messagingSenderId: "688300012999",
    appId: "1:688300012999:web:23c92e850f5d2ba8ef55e2"
};

/* inicializamos la aplicacion de firebase para poder acceder a todas sus funcionalidades */
const firebaseApp = firebase.initializeApp(config)

/* instancia de la base de datos firestore de firebase*/
export const db = firebaseApp.firestore()
