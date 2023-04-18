function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 45 * i);
    });
  }


const title = document.getElementById("title")
typeWriter(title)

const text = document.getElementById("text-content");
typeWriter(text);

