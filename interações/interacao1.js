function typeWrite(elemento) {
    const textoArray =  elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i)  => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i );


    });
}

const titulo = document.querySelector('h1')
typeWrite(titulo);

// typeWrite(document.querySelector('h2'));



//interação h2

function aparecerMensagem(){
    setTimeout(() => {
        document.querySelector('h2').innerHTML = "Fique a vontade para navegar ";
        
    }, 5200 );
}
aparecerMensagem();