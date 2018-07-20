firebase.database().ref('messages')
  .limitToLast(10) // Filtro para no obtener todos los mensajes
  .once('value')
  .then((messages) => {
    JSON.stringify(messages);
  })
  .catch(() => {
  });

//Aquí se van adicionando los nuevos mensages (childs) de los User guardados en la database.
firebase.database().ref('messages')
  .limitToLast(10)
  .on('child_added', (newMessage) => {
    const messageContainer = document.createElement('div')
    wallMessages.appendChild(messageContainer)
    messageContainer.innerHTML +=
      `<div class="container">
        <div style = "background-color: #E8910C" class="mb-3">
          <p class="m-0">Autor: ${newMessage.val().creatorName}</p>
          <p class="m-0" dataKeyEdit="${newMessage.key}">Mensaje<br>${newMessage.val().text}</p>
            <i class="fas fa-star p-1 pb-1" dataKey="${newMessage.key}" onclick="starPost(event)"></i><span>${newMessage.val().stars}</span>
            <i class="far fa-edit p-1 pb-1" onclick="editPost(event)">
            </i>
            <i class="fas fa-trash-alt p-1 pb-1" dataKey="${newMessage.key}" onclick="deletePost(event)"></i>
        </div>
      </div>`;
  });

//Función para editar el mensaje.
function editSendMessage(event) {
  event.stopPropagation();
  const keyPostToEdit = event.target.getAttribute('dataKeyEdit');
  text = editMessageBox.value
  data = { text }
  firebase.database().ref('messages/').child(keyPostToEdit).update(data);
}

//Función para eliminar el mensaje.
function deletePost(event) {
  event.stopPropagation();
  let accept = confirm('¿Está seguro que quiere eliminar el post?');
  if (accept === true) {
    const keyPostToDelete = event.target.getAttribute('dataKey');
    firebase.database().ref('messages/').child(keyPostToDelete).remove();
    console.log('Se borró el mensaje')
  } else {
    alert('No se borró el mensaje.')
  };
}

//Función para adicionar estrellas.
function starPost(event) {
  event.stopPropagation();
  event.target.style.color = 'yellow';
  const stars = event.target.getAttribute('dataKey');
  firebase.database().ref('messages/' + stars).once('value', function (post) {
    let result = (post.val().stars || 0) + 1;
    firebase.database().ref('messages').child(stars).update({
      stars: result
    });
  });
};

//Función para mandar mensajes y ocultar el div del mensaje.
function sendMessage() {
  if (messageBox.value !== "") {
    messageDiv.style.display = "none";
    const currentUser = firebase.auth().currentUser;
    const messageAreaText = messageBox.value;

    //Para tener una nueva llave en la colección messages.
    const newMessageKey = firebase.database().ref().child('messages').push().key;
    firebase.database().ref(`messages/${newMessageKey}`).set({
      creator: currentUser.uid,
      creatorName: currentUser.displayName,
      text: messageAreaText,
      stars: 0
    });
  } else {
    alert('No puedes subir un mensaje en blanco.')
  }
}

//Aparece el div para escribir el mensaje.
function writeNewPost() {
  if (editContainer.style.display === "block") {
    messageDiv.style.display = "none";
  } else { messageDiv.style.display = "block" };
}

//Desaparece el div para escribir el mensaje.
function cancelMessage() {
  messageDiv.style.display = "none";
}

//Funcionalidades para editar.
function editCancelMessage() {
  editContainer.style.display = "none";
}

function editPost() {
  if (messageDiv.style.display === "block") {
    editContainer.style.display = "none";
  } else { editContainer.style.display = "block" }
}