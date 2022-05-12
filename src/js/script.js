const botaoSubmit = document.getElementById("submit")
const campoInput = document.querySelectorAll("input")

botaoSubmit.addEventListener("click", function(previnirAcaoBotao) {
  campoInput.forEach(function(item) {
    
    if (item.value == '') {
      previnirAcaoBotao.preventDefault();
      item.classList.add("vermelho");
      item.nextElementSibling.classList.add("vermelho");

    } else {
      item.classList.add("verde")
    }
  })
})

campoInput.forEach(function (item) {
  item.addEventListener('keyup', function(campoPreenchido) {
    const input = campoPreenchido.target;
    if (input.value) {
      input.classList.remove('vermelho');
      input.classList.add('verde');
      input.nextElementSibling.classList.remove('vermelho');
    }
  });
});