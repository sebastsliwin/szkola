document.getElementById('oblicz').addEventListener('click', function () {
    var uczen = document.getElementsByClassName('uczen');
    var tytul = document.querySelectorAll('[type="number"]');
    var wynik = 0;
    var dodatkowe = 0.5;
    
        for (var i = 0; i < 7; i++) {
            var liczba = parseFloat(tytul[i].value);
            var srednia = (wynik += liczba) / 7;
        }
        if (document.getElementsByClassName('zajecia-dodatkowe') !== '' && srednia < 6) {
            srednia += dodatkowe;
        }

        document.getElementsByClassName('srednia')[0].innerHTML = srednia;
});
