const firebaseConfig = {
    apiKey: "AIzaSyBl96iYPVgrXcDyoWrbHyq-cZljWVXp6NQ",
    authDomain: "kwitter-d0413.firebaseapp.com",
    databaseURL: "https://kwitter-d0413-default-rtdb.firebaseio.com",
    projectId: "kwitter-d0413",
    storageBucket: "kwitter-d0413.appspot.com",
    messagingSenderId: "701404469120",
    appId: "1:701404469120:web:cb6eb5c2d06350c8c09365"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

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



