function menushow(){
    let menumobile = document.queryselector('menu-mobile');
    if (menumobile.classlist.contains('open')){
        menumobile.classlist.remove('open');
    }else{
        menumobile.classlist.add('open');
    }
}

var span = document.querySelector('.texto-pessoal span');

span.addEventListener('click',function(){
    var conteudo = document.querySelector('.texto-pessoal p');

    if(conteudo.classList.contains('mostrar')){
        span.innerHTML = 'Ver Mais!'
        conteudo.classList.remove('mostrar');
    }else{
        span.innerHTML = 'Ocultar!'
        conteudo.classList.add('mostrar');
    }
});