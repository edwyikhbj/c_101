// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

  apiKey: "AIzaSyCVKBio-106VB8X4Da4gthjur6fxr7nOvQ",

  authDomain: "c-101-7f6d2.firebaseapp.com",

  databaseURL: "https://c-101-7f6d2-default-rtdb.firebaseio.com",

  projectId: "c-101-7f6d2",

  storageBucket: "c-101-7f6d2.appspot.com",

  messagingSenderId: "593747453754",

  appId: "1:593747453754:web:46fe7045f04cb6d2ef5203"

};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



