function menushow(){
    let menumobile = document.queryselector('menu-mobile');
    if (menumobile.classlist.contains('open')){
        menumobile.classlist.remove('open');
    }else{
        menumobile.classlist.add('open');
    }
}