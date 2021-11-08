
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7OicP4R6_pmY_dJJ244Y23Ynm6KBN5QM",
  authDomain: "jokes-mboc.firebaseapp.com",
  databaseURL: "https://jokes-mboc-default-rtdb.firebaseio.com",
  projectId: "jokes-mboc",
  storageBucket: "jokes-mboc.appspot.com",
  messagingSenderId: "942631942519",
  appId: "1:942631942519:web:238da8048a8138f0ad4972"
};


// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
