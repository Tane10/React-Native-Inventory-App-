import Firebase from 'firebase';  
let config = {  
    apiKey: "AIzaSyDleTdLfVwznqSyPGYkKjQt_nAIMYqHIVo",
    authDomain: "motobikepartsinventory.firebaseapp.com",
    databaseURL: "https://motobikepartsinventory.firebaseio.com",
    projectId: "motobikepartsinventory",
    storageBucket: "motobikepartsinventory.appspot.com",
    messagingSenderId: "778289409844"
};
let app = Firebase.initializeApp(config);  
export const db = app.database();  

