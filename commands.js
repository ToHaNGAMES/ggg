let button;

document.getElementById('button1').oneclick = function(){
  event.preventDefault();
  let buttonBody = document.getElementById('like-body');

  let button = {
    body : likeBody.value,
  }
  ButtonName.value = '';
  ButtonBody.value = '';
  Button.push(button);
  saveButton();
  showButton();
}

function saveButton(){
  LocalStorage.setItem('button', JSON.stringify(button));
}
