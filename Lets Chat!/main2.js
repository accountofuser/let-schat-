var abcdefg=localStorage.getItem('username');
document.getElementById('username').innerHTML = 'Welcome '+abcdefg+'!';
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDjoX5LGlie36upA2XpGcFVHBvh6hpAkxM",
    authDomain: "letschat-5288d.firebaseapp.com",
    projectId: "letschat-5288d",
    storageBucket: "letschat-5288d.appspot.com",
    messagingSenderId: "744930745457",
    appId: "1:744930745457:web:68e4f6e0be9000b3c70fd0",
    measurementId: "G-J192HY71FL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
