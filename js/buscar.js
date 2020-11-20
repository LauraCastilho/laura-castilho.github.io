function acharweb(){
    var cidade = document.getElementsByName('cidade')
    var estado = document.getElementsByName('estado')

    window.location.assign("https://www.google.com.br/maps/search/"+ cidade.values + "," + estado.values + "+veterinaria/");

}
