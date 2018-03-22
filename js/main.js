document.getElementById('oblicz').addEventListener('click', function () {
    var uczniowie = document.getElementsByClassName('uczniowie');
    var dodatkowe = 0.5;

    for (var i = 0; i < uczniowie.length; i++) {
        var tytul = document.querySelectorAll(`#uczen${i+1} [type=number]`);
        var wynik = 0;

        for (var x = 0; x < tytul.length; x++) {
            var liczba = parseFloat(tytul[x].value);
            var srednia = (wynik += liczba) / 7;
            if(liczba == 1){
                document.getElementsByClassName('uczen')[i].style.backgroundColor = 'red';
            }
        }
        if (document.getElementsByClassName('zajecia-dodatkowe')[i].value !== '' && srednia < 6) {
            srednia += dodatkowe;
        }

        document.getElementsByClassName('srednia')[i].innerHTML = srednia.toFixed(2);

        if (document.getElementsByClassName('srednia')[i].innerHTML >= 4.75) {
            document.getElementsByClassName('uczen')[i].style.backgroundColor = 'green';
        } 
    } 
});
