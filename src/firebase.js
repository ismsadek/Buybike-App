import Firebase from 'firebase'

 
const firebaseApp = Firebase.initializeApp({
 
	apiKey: "AIzaSyDuVIhArpRiO6DG9pHlKxC0twpVMJ3Nfco",
	authDomain: "buy-bike.firebaseapp.com",
	databaseURL: "https://buy-bike.firebaseio.com",
	projectId: "buy-bike",
	storageBucket: "buy-bike.appspot.com",
	messagingSenderId: "266753776126"
  
});

export const db = firebaseApp.database();
export const storage = firebaseApp.storage();
export const dbMotosRef = db.ref('motos');
export const dbUsersRef = db.ref('users');
export const auth = firebaseApp.auth();
export const dbFilterOneRef = db.ref('filter1');
export const dbFilterTwoRef = db.ref('filter2');
export const dbFilterThreeRef = db.ref('filter3');
export const dbFinalRef = db.ref('final');
export const dbBrandRef = db.ref('brand');
// export const auth = firebaseApp.auth()