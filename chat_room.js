user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebaseConfig.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
}

function getData().ref("/").on('value', function(snapshot) document.getElementById("output").innerHTML;
Room_names = childKey;

function updateLike(message_id){
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);


firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes;
})
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("chat.html");
}