var form = document.querySelector('form');
async function handleSubmit(event) {

  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Já enviamos a sua mensagem!";
    status.style.display = 'block';
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! Parece que temos algum problema"
    status.style.display = 'block';
  });
}
form.addEventListener("submit", handleSubmit)


var perguntas = document.querySelectorAll('.pergunta');
perguntas.forEach( pergunta => {

  pergunta.addEventListener('click', () => {

    perguntas.forEach( elemento => {
      elemento.childNodes[3].style.display = 'none'
    })

    pergunta.childNodes[3].style.display = 'block'
  })
})

