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
  
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name + "!";

function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name" 
      })
      localStorage.setItem("room_name" , room_name);
       window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name-" + Room_name);
    row="<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
    document.getElementById("output").innerhtml+=row 
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("Room_name" + name);
     window.location = "kwitter_page.html"
}

function logout() 
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     window.location= "index.html";
}