// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
<link rel="stylesheet" type="text/css" href="style.css">
<script src="chat.js"></script>
// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage

    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
}



