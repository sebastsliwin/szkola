document.getElementById('oblicz').addEventListener('click', function(){
    var tytul = document.querySelectorAll('[type="number"]');

    for(var i = 0; i < tytul.length; i++){
        var sredniaOcen = tytul[i].defaultValue;
        console.log(sredniaOcen);
        document.getElementsByClassName('srednia')[i].innerHTML = sredniaOcen;
    }
    
});