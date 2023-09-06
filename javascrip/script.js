

function menushow(){/* mostrar menu mobile */
    let menumobile = document.queryselector('menu-mobile');
    if (menumobile.classlist.contains('open')){
        menumobile.classlist.remove('open');
    }else{
        menumobile.classlist.add('open');
    }
}

var span = document.querySelector('.texto-pessoal span');

span.addEventListener('click',function(){ /* mostrar mais e menor apresentação */
    var conteudo = document.querySelector('.texto-pessoal p');

    if(conteudo.classList.contains('mostrar')){
        span.innerHTML = 'Ver Mais!'
        conteudo.classList.remove('mostrar');
    }else{
        span.innerHTML = 'Ver menos!'
        conteudo.classList.add('mostrar');
    }
});

/*alterar tema*/
var switchButton = document.getElementById('switch');
        switchButton.addEventListener('click', toggleClass);
        function toggleClass() {
            var element = document.body;

            if (element.classList.contains('light')) {
                element.classList.remove('light');
                element.classList.add('dark');
            } else {
                element.classList.remove('dark');
                element.classList.add('light');
            }
        }